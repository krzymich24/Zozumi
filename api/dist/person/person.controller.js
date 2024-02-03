"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var PersonController_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonController = void 0;
const common_1 = require("@nestjs/common");
const person_entity_1 = require("./person.entity");
const person_service_1 = require("./person.service");
const jsonwebtoken_1 = require("jsonwebtoken");
const constants_1 = require("../constants");
const typescript_functional_extensions_1 = require("typescript-functional-extensions");
const local_auth_guard_1 = require("../auth/local-auth.guard");
const path_1 = require("path");
const bcrypt_1 = require("bcrypt");
const create_user_dto_1 = require("./dto/create-user.dto");
const parse_credentials_pipe_1 = require("../parse-credentials.pipe");
let PersonController = PersonController_1 = class PersonController {
    constructor(service) {
        this.service = service;
        this.logger = new common_1.Logger(PersonController_1.name);
    }
    async register(dto) {
        this.logger.debug(`Parsed Registration DTO: ${JSON.stringify(dto)}`);
        const person = new person_entity_1.Person();
        person.username = dto.username;
        person.password = dto.password;
        person.email = dto.email;
        const created = await this.service.addOne(person);
        const otp = (0, jsonwebtoken_1.sign)({ canActivate: created.id }, constants_1.LYRICS);
        const link = (0, path_1.join)(constants_1.CLIENT, 'auth', 'register', otp);
        this.logger.verbose(`Account activation OTP for user=${created.id}: ${link}`);
        return;
    }
    async activate(otp) {
        const token = (0, jsonwebtoken_1.verify)(otp, constants_1.LYRICS);
        const userId = typescript_functional_extensions_1.Maybe.from(token['canActivate']);
        this.logger.verbose(`Account activation attempted for ${userId.getValueOrDefault('???')}`);
        if (userId.hasNoValue)
            throw new common_1.NotFoundException();
        await this.service.activate(userId.getValueOrThrow());
        return;
    }
    async forgottenPassword(email) {
        this.logger.debug(`email=${email}, ${decodeURIComponent(email)}`);
        const user = await this.service.findOneByEmail(email);
        if (email !== user.email)
            throw new common_1.BadGatewayException(`${email} is not ${user.email}`);
        await this.service.deactivate(user.id);
        const otp = (0, jsonwebtoken_1.sign)({ canReset: user.id }, constants_1.LYRICS);
        this.logger.verbose(`Password reset OTP for user#${user.id}: ${otp}`);
        return otp;
    }
    async reset(otp, password) {
        const token = (0, jsonwebtoken_1.verify)(otp, constants_1.LYRICS);
        const userId = typescript_functional_extensions_1.Maybe.from(token['canReset']);
        this.logger.verbose(`Password reset attempted for ${userId.getValueOrDefault('???')}`);
        if (userId.hasNoValue)
            throw new common_1.NotFoundException();
        await this.service.resetPassword(userId.getValueOrThrow(), (0, bcrypt_1.hashSync)(password, 8));
        return;
    }
    async login(req) {
        this.logger.debug(`User: ${req.user}`);
        return (0, jsonwebtoken_1.sign)(req.user, constants_1.LYRICS);
    }
};
exports.PersonController = PersonController;
__decorate([
    (0, common_1.Post)('/register'),
    __param(0, (0, common_1.Body)(parse_credentials_pipe_1.ParseCredentialsPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.RegisterDto]),
    __metadata("design:returntype", Promise)
], PersonController.prototype, "register", null);
__decorate([
    (0, common_1.Put)('/activate'),
    __param(0, (0, common_1.Query)('otp')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PersonController.prototype, "activate", null);
__decorate([
    (0, common_1.Post)('/forgotten'),
    __param(0, (0, common_1.Query)('email')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PersonController.prototype, "forgottenPassword", null);
__decorate([
    (0, common_1.Put)('/reset'),
    __param(0, (0, common_1.Query)('otp')),
    __param(1, (0, common_1.Query)('password')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], PersonController.prototype, "reset", null);
__decorate([
    (0, common_1.UseGuards)(local_auth_guard_1.LocalAuthGuard),
    (0, common_1.Put)('login'),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PersonController.prototype, "login", null);
exports.PersonController = PersonController = PersonController_1 = __decorate([
    (0, common_1.Controller)('person'),
    __metadata("design:paramtypes", [person_service_1.PersonService])
], PersonController);
//# sourceMappingURL=person.controller.js.map
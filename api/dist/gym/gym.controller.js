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
Object.defineProperty(exports, "__esModule", { value: true });
exports.GymController = void 0;
const common_1 = require("@nestjs/common");
const gym_service_1 = require("./gym.service");
const create_gym_dto_1 = require("./dto/create-gym.dto");
const route_setter_service_1 = require("../route-setter/route-setter.service");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const credentials_decorator_1 = require("../auth/credentials.decorator");
const person_entity_1 = require("../person/person.entity");
let GymController = class GymController {
    constructor(gymService, routeSetterService) {
        this.gymService = gymService;
        this.routeSetterService = routeSetterService;
    }
    create(createGymDto) {
        return this.gymService.create(createGymDto);
    }
    findAll() {
        return this.gymService.findAll();
    }
    findOne(id) {
        return this.gymService.findOne(id);
    }
    remove(id) {
        return this.gymService.remove(+id);
    }
    assign(gymId, personId, credentials) {
        if (!(credentials === null || credentials === void 0 ? void 0 : credentials.isAdmin))
            throw new common_1.UnauthorizedException('Not allowed to access this route');
        return this.routeSetterService.create(gymId, personId);
    }
    unAssign(gymId, personId, credentials) {
        if (!(credentials === null || credentials === void 0 ? void 0 : credentials.isAdmin))
            throw new common_1.UnauthorizedException('Not allowed to access this route');
        return this.routeSetterService.remove(gymId, personId);
    }
    listRouteSetters(id, credentials) {
        if (!(credentials === null || credentials === void 0 ? void 0 : credentials.isAdmin))
            throw new common_1.UnauthorizedException('Not allowed to access this route');
        console.warn(`gym/${id}/person`);
        return this.routeSetterService.listAllByGym(id);
    }
    async isAllowed(id, credentials) {
        if (!(credentials === null || credentials === void 0 ? void 0 : credentials.id))
            throw new common_1.NotFoundException();
        const isAllowed = await this.routeSetterService
            .verify(id, credentials.id)
            .match({
            success: () => true,
            failure: (e) => {
                console.error(e);
                return false;
            },
        });
        console.log({ id, credentials, isAllowed });
        return { isAllowed };
    }
};
exports.GymController = GymController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_gym_dto_1.CreateGymDto]),
    __metadata("design:returntype", void 0)
], GymController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], GymController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], GymController.prototype, "findOne", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], GymController.prototype, "remove", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)(':gymId/assign/:personId'),
    __param(0, (0, common_1.Param)('gymId')),
    __param(1, (0, common_1.Param)('personId')),
    __param(2, (0, credentials_decorator_1.Credentials)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, person_entity_1.Person]),
    __metadata("design:returntype", void 0)
], GymController.prototype, "assign", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Delete)(':gymId/assign/:personId'),
    __param(0, (0, common_1.Param)('gymId')),
    __param(1, (0, common_1.Param)('personId')),
    __param(2, (0, credentials_decorator_1.Credentials)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, person_entity_1.Person]),
    __metadata("design:returntype", void 0)
], GymController.prototype, "unAssign", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)(':id/person'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, credentials_decorator_1.Credentials)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, person_entity_1.Person]),
    __metadata("design:returntype", void 0)
], GymController.prototype, "listRouteSetters", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)(':id/assign'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, credentials_decorator_1.Credentials)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, person_entity_1.Person]),
    __metadata("design:returntype", Promise)
], GymController.prototype, "isAllowed", null);
exports.GymController = GymController = __decorate([
    (0, common_1.Controller)('gym'),
    __metadata("design:paramtypes", [gym_service_1.GymService,
        route_setter_service_1.RouteSetterService])
], GymController);
//# sourceMappingURL=gym.controller.js.map
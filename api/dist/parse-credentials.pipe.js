"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParseCredentialsPipe = void 0;
const common_1 = require("@nestjs/common");
const class_transformer_1 = require("class-transformer");
const typescript_functional_extensions_1 = require("typescript-functional-extensions");
const create_user_dto_1 = require("./person/dto/create-user.dto");
let ParseCredentialsPipe = class ParseCredentialsPipe {
    transform(value, metadata) {
        try {
            const username = typescript_functional_extensions_1.Maybe.from(value['username']).getValueOrThrow();
            const password = typescript_functional_extensions_1.Maybe.from(value['password']).getValueOrThrow();
            const email = typescript_functional_extensions_1.Maybe.from(value['email']);
            if (email.hasValue)
                return (0, class_transformer_1.plainToInstance)(create_user_dto_1.RegisterDto, {
                    username,
                    password,
                    email: email.getValueOrThrow(),
                }, { excludeExtraneousValues: true });
            return (0, class_transformer_1.plainToInstance)(create_user_dto_1.LoginDto, {
                username,
                password,
            }, { excludeExtraneousValues: true });
        }
        catch (e) {
            throw new common_1.BadRequestException('Validation failed');
        }
    }
};
exports.ParseCredentialsPipe = ParseCredentialsPipe;
exports.ParseCredentialsPipe = ParseCredentialsPipe = __decorate([
    (0, common_1.Injectable)()
], ParseCredentialsPipe);
//# sourceMappingURL=parse-credentials.pipe.js.map
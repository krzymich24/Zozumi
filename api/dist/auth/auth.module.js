"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const auth_service_1 = require("./auth.service");
const jwt_strategy_1 = require("./jwt.strategy");
const constants_1 = require("../constants");
const person_module_1 = require("../person/person.module");
const local_strategy_1 = require("./local.strategy");
const person_service_1 = require("../person/person.service");
const person_provider_1 = require("../person/person.provider");
const database_module_1 = require("../database.module");
const jwt_1 = require("@nestjs/jwt");
let AuthModule = class AuthModule {
};
exports.AuthModule = AuthModule;
exports.AuthModule = AuthModule = __decorate([
    (0, common_1.Module)({
        imports: [
            jwt_1.JwtModule.register({
                secret: constants_1.LYRICS,
                signOptions: { expiresIn: '1h' },
            }),
            person_module_1.PersonModule,
            passport_1.PassportModule,
            database_module_1.DatabaseModule,
        ],
        providers: [
            auth_service_1.AuthService,
            person_service_1.PersonService,
            jwt_strategy_1.JwtStrategy,
            local_strategy_1.LocalStrategy,
            ...person_provider_1.personProvider,
        ],
    })
], AuthModule);
//# sourceMappingURL=auth.module.js.map
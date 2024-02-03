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
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginDto = exports.RegisterDto = exports.UserCredentials = void 0;
const class_transformer_1 = require("class-transformer");
const bcrypt_1 = require("bcrypt");
class UserCredentials {
}
exports.UserCredentials = UserCredentials;
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], UserCredentials.prototype, "username", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, class_transformer_1.Transform)(({ value }) => (0, bcrypt_1.hashSync)(value, 8)),
    __metadata("design:type", String)
], UserCredentials.prototype, "password", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], UserCredentials.prototype, "__type", void 0);
class RegisterDto extends UserCredentials {
}
exports.RegisterDto = RegisterDto;
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], RegisterDto.prototype, "email", void 0);
class LoginDto extends UserCredentials {
}
exports.LoginDto = LoginDto;
//# sourceMappingURL=create-user.dto.js.map
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
exports.RouteSetter = void 0;
const typeorm_1 = require("typeorm");
const person_entity_1 = require("../person/person.entity");
const gym_entity_1 = require("../gym/entities/gym.entity");
let RouteSetter = class RouteSetter {
};
exports.RouteSetter = RouteSetter;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", String)
], RouteSetter.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)((type) => person_entity_1.Person, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: 'person' }),
    __metadata("design:type", person_entity_1.Person)
], RouteSetter.prototype, "person", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)((type) => gym_entity_1.Gym),
    (0, typeorm_1.JoinColumn)({ name: 'gym' }),
    __metadata("design:type", gym_entity_1.Gym)
], RouteSetter.prototype, "gym", void 0);
exports.RouteSetter = RouteSetter = __decorate([
    (0, typeorm_1.Entity)({ name: 'route-setter' })
], RouteSetter);
//# sourceMappingURL=route-setter.entity.js.map
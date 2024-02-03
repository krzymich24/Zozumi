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
exports.RouteSetterService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const route_setter_provider_1 = require("./route-setter.provider");
const typescript_functional_extensions_1 = require("typescript-functional-extensions");
let RouteSetterService = class RouteSetterService {
    constructor(gymRepository) {
        this.gymRepository = gymRepository;
    }
    create(gymId, userId) {
        return this.gymRepository.insert({
            gym: () => gymId,
            person: () => userId,
        });
    }
    verify(gym, person) {
        return typescript_functional_extensions_1.ResultAsync.try(() => this.gymRepository.countBy({
            gym: { id: gym },
            person: { id: person },
        }), (error) => `No route-setter ${person} found for gym ${gym}: ${error}`).ensure((result) => result === 1, (result) => `There were ${result} results for person ${person} and gym ${gym}`);
    }
    async listAllByGym(gymId) {
        const ppl = await this.gymRepository.findBy({ gym: { id: gymId } });
        console.log(ppl);
        return ppl;
    }
    remove(gymId, userId) {
        return this.gymRepository.delete({
            gym: { id: gymId },
            person: { id: userId },
        });
    }
    find(gym, person) {
        return this.gymRepository.findOneBy({
            gym: { id: gym },
            person: { id: person },
        });
    }
};
exports.RouteSetterService = RouteSetterService;
exports.RouteSetterService = RouteSetterService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(route_setter_provider_1.ROUTE_SETTER_REPO)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], RouteSetterService);
//# sourceMappingURL=route-setter.service.js.map
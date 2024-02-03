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
exports.RouteService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const route_provider_1 = require("./route.provider");
const route_setter_service_1 = require("../route-setter/route-setter.service");
let RouteService = class RouteService {
    constructor(repo, setters) {
        this.repo = repo;
        this.setters = setters;
    }
    async create({ name, grade, gym }, person) {
        const author = await this.setters.find(gym, person);
        return this.repo.insert({
            name,
            grade,
            author,
        });
    }
    findAll() {
        return this.repo.find();
    }
    findAllForGym(gym) {
        return this.repo.findBy({ author: { gym: { id: gym } } });
    }
    findOne(id) {
        return `This action returns a #${id} route`;
    }
    remove(id) {
        return `This action removes a #${id} route`;
    }
};
exports.RouteService = RouteService;
exports.RouteService = RouteService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(route_provider_1.ROUTE_REPO)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        route_setter_service_1.RouteSetterService])
], RouteService);
//# sourceMappingURL=route.service.js.map
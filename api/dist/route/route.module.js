"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RouteModule = void 0;
const common_1 = require("@nestjs/common");
const route_service_1 = require("./route.service");
const route_controller_1 = require("./route.controller");
const route_provider_1 = require("./route.provider");
const database_module_1 = require("../database.module");
const route_setter_service_1 = require("../route-setter/route-setter.service");
const route_setter_provider_1 = require("../route-setter/route-setter.provider");
let RouteModule = class RouteModule {
};
exports.RouteModule = RouteModule;
exports.RouteModule = RouteModule = __decorate([
    (0, common_1.Module)({
        imports: [database_module_1.DatabaseModule],
        controllers: [route_controller_1.RouteController],
        providers: [
            ...route_provider_1.routeProvider,
            route_service_1.RouteService,
            route_setter_service_1.RouteSetterService,
            ...route_setter_provider_1.routeSetterProvider,
        ],
    })
], RouteModule);
//# sourceMappingURL=route.module.js.map
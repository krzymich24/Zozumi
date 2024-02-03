"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routeSetterProvider = exports.ROUTE_SETTER_REPO = void 0;
const database_provider_1 = require("../database.provider");
const route_setter_entity_1 = require("./route-setter.entity");
exports.ROUTE_SETTER_REPO = 'ROUTE_SETTER_RELATIONSHIP';
exports.routeSetterProvider = [
    {
        provide: exports.ROUTE_SETTER_REPO,
        useFactory: (dataSource) => dataSource.getRepository(route_setter_entity_1.RouteSetter),
        inject: [database_provider_1.DATA_SOURCE],
    },
];
//# sourceMappingURL=route-setter.provider.js.map
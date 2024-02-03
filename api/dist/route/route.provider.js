"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routeProvider = exports.ROUTE_REPO = void 0;
const database_provider_1 = require("../database.provider");
const route_entity_1 = require("./entities/route.entity");
exports.ROUTE_REPO = 'ROUTE_REPOSITORY';
exports.routeProvider = [
    {
        provide: exports.ROUTE_REPO,
        useFactory: (dataSource) => dataSource.getRepository(route_entity_1.Route),
        inject: [database_provider_1.DATA_SOURCE],
    },
];
//# sourceMappingURL=route.provider.js.map
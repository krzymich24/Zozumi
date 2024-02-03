"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gymProvider = exports.GYM_REPO = void 0;
const database_provider_1 = require("../database.provider");
const gym_entity_1 = require("./entities/gym.entity");
exports.GYM_REPO = 'GYM_REPOSITORY';
exports.gymProvider = [
    {
        provide: exports.GYM_REPO,
        useFactory: (dataSource) => dataSource.getRepository(gym_entity_1.Gym),
        inject: [database_provider_1.DATA_SOURCE],
    },
];
//# sourceMappingURL=gym.provider.js.map
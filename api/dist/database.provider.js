"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseProvider = exports.DATA_SOURCE = void 0;
const path_1 = require("path");
const typeorm_1 = require("typeorm");
exports.DATA_SOURCE = 'DATA_SOURCE';
exports.databaseProvider = [
    {
        provide: exports.DATA_SOURCE,
        useFactory: async () => {
            const dataSource = new typeorm_1.DataSource({
                type: 'postgres',
                host: 'localhost',
                port: 5432,
                username: 'root',
                password: 'root',
                database: 'webapp_db',
                entities: [
                    (0, path_1.join)(__dirname, '**', '*.entity.{ts,js}'),
                ],
                synchronize: true,
            });
            return dataSource.initialize();
        },
    },
];
//# sourceMappingURL=database.provider.js.map
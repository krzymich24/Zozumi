"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.personProvider = exports.PERSON_REPO = void 0;
const person_entity_1 = require("./person.entity");
const database_provider_1 = require("../database.provider");
exports.PERSON_REPO = 'PERSON_REPOSITORY';
exports.personProvider = [
    {
        provide: exports.PERSON_REPO,
        useFactory: (dataSource) => dataSource.getRepository(person_entity_1.Person),
        inject: [database_provider_1.DATA_SOURCE],
    },
];
//# sourceMappingURL=person.provider.js.map
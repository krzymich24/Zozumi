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
exports.PersonService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const person_provider_1 = require("./person.provider");
let PersonService = class PersonService {
    constructor(personRepository) {
        this.personRepository = personRepository;
    }
    async activate(id) {
        return this.personRepository.update(id, { isActive: true });
    }
    async resetPassword(id, password) {
        return this.personRepository.update(id, { isActive: true, password });
    }
    async deactivate(id) {
        return this.personRepository.update(id, { isActive: false });
    }
    async findAll() {
        return this.personRepository.find();
    }
    async addOne(person) {
        return this.personRepository.save(person);
    }
    async findOneByUsername(username) {
        return this.personRepository.findOneBy({ username });
    }
    async findOneByEmail(email) {
        return this.personRepository.findOneBy({ email });
    }
};
exports.PersonService = PersonService;
exports.PersonService = PersonService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(person_provider_1.PERSON_REPO)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], PersonService);
//# sourceMappingURL=person.service.js.map
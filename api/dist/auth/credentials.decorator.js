"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Credentials = void 0;
const common_1 = require("@nestjs/common");
exports.Credentials = (0, common_1.createParamDecorator)((data, ctx) => {
    const request = ctx.switchToHttp().getRequest();
    console.log(request === null || request === void 0 ? void 0 : request.user);
    return request === null || request === void 0 ? void 0 : request.user;
});
//# sourceMappingURL=credentials.decorator.js.map
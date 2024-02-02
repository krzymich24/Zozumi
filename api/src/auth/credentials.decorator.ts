import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { Maybe } from 'typescript-functional-extensions';

export const Credentials = createParamDecorator(
  (data: string, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    console.log(request?.user);
    return request?.user;
  },
);

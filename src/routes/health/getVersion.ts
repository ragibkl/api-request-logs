import { RouterContext } from 'koa-router';

export const getVersion = (ctx: RouterContext): void => {
  ctx.body = { version: 1 };
  ctx.status = 200;
};

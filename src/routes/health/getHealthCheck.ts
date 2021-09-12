import { RouterContext } from 'koa-router';

export const getHealthCheck = (ctx: RouterContext): void => {
  ctx.body = 'Health Check OK from api-request-logs';
  ctx.status = 200;
};

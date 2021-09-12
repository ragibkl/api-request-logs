import { RouterContext } from 'koa-router';

export function getSmokeTest(ctx: RouterContext): void {
  ctx.body = 'Smoke Test OK from api-request-logs';
  ctx.status = 200;
}

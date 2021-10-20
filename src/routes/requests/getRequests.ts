import { RouterContext } from 'koa-router';
import * as reqs from '../../storage/requests';

export async function getRequests(ctx: RouterContext): Promise<void> {
  ctx.body = await reqs.list();
  ctx.status = 200;
}

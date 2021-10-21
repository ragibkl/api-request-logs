import { RouterContext } from 'koa-router';
import * as reqs from '../../storage/requests';

export async function clearRequests(ctx: RouterContext): Promise<void> {
  ctx.body = await reqs.clear();
  ctx.status = 200;
}

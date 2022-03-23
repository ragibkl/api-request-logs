import { RouterContext } from 'koa-router';

import * as reqs from '../../storage/requests';

export async function handleRequest(ctx: RouterContext): Promise<void> {
  console.log('handleRequest');
  const event = {
    timestamp: new Date().toISOString(),
    request: {
      method: ctx.request.method,
      body: ctx.request.body,
      headers: ctx.request.headers,
      host: ctx.request.host,
      hostname: ctx.request.hostname,
      ip: ctx.request.ip,
      path: ctx.request.path,
      querystring: ctx.request.querystring,
      url: ctx.request.url,
    },
  };

  console.log(event);
  await reqs.add(event);

  ctx.status = 201;
}

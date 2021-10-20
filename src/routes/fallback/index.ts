import koaBody from 'koa-body';
import Router from 'koa-router';

import { handleRequest } from './handleRequest';

export const fallbackRouter = new Router();

fallbackRouter.use(koaBody());
fallbackRouter.all('/(.*)', handleRequest);

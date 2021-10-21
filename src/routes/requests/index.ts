import Router from 'koa-router';

import { getRequests } from './getRequests';
import { clearRequests } from './clearRequests';

export const requestsRouter = new Router();

requestsRouter.get('/', getRequests);
requestsRouter.del('/', clearRequests);

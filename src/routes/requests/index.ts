import Router from 'koa-router';

import { getRequests } from './getRequests';

export const requestsRouter = new Router();

requestsRouter.get('/', getRequests);

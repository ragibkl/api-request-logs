import Router from 'koa-router';

import { getHealthCheck } from './getHealthCheck';
import { getSmokeTest } from './getSmokeTest';
import { getVersion } from './getVersion';

export const healthRouter = new Router();

healthRouter.get('/health', getHealthCheck);
healthRouter.get('/smoke', getSmokeTest);
healthRouter.get('/version', getVersion);

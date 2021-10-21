import Router from 'koa-router';

import { healthRouter } from './health';
import { requestsRouter } from './requests';
import { fallbackRouter } from './fallback';

export const router = new Router();

router.use('/health', healthRouter.routes());
router.use('/_requests', requestsRouter.routes());
router.all('/(.*)', fallbackRouter.routes());

import Koa from 'koa';

// import { handleError } from './middleware/handleError';
// import { sortJsonBody } from './middleware/sortJsonBody';

import { router } from './routes';

export const app = new Koa();

// app.use(handleError);
// app.use(sortJsonBody);
app.use(router.routes());
app.use(router.allowedMethods());

import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

import { errorHandlerMiddleware } from '@/middlewares';
import { constants } from '@/configs';
import { rootRouter } from '@/routes';

const app = express();

app.use('/api', rootRouter);
app.use(errorHandlerMiddleware);

app.listen(constants.port, () => {
  console.log(`Server is running on port: ${constants.port}`);
});

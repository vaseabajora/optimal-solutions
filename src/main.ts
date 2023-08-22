import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import helmet from 'helmet';

dotenv.config();

import { errorHandlerMiddleware } from '@/middlewares';
import { constants, corsConfig } from '@/configs';
import { rootRouter } from '@/routes';

const app = express();

app.use(cors(corsConfig));
app.use(helmet());
app.use('/api', rootRouter);
app.use(errorHandlerMiddleware);

app.listen(constants.port, () => {
  console.log(`Server is running on port: ${constants.port}`);
});

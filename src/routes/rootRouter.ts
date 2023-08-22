import { Router } from 'express';
import { closePipelineRouter } from './closePipelineRouter';

export const rootRouter = Router().use('/close-pipelines', closePipelineRouter);

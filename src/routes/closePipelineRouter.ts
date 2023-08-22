import { Router } from 'express';
import { closePipelineController } from '../controllers';

export const closePipelineRouter = Router()
  .get('/', closePipelineController.getPipelines)
  .get('/:pipelineId/opportunities', closePipelineController.getOpportunitiesByPipelineId);

import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { closePipelineService } from '@/services';

export async function getPipelines(_: Request, res: Response, next: NextFunction) {
  try {
    const pipelines = await closePipelineService.getPipelines();
    res.status(StatusCodes.OK).json(pipelines);
  } catch (error) {
    next(error);
  }
}

export async function getOpportunitiesByPipelineId(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { pipelineId } = req.params;
  try {
    const opportunities = await closePipelineService.getOpportunitiesByPipelineId(pipelineId);
    res.status(StatusCodes.OK).json(opportunities);
  } catch (error) {
    next(error);
  }
}

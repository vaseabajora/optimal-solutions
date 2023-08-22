import { NextFunction, Request, Response } from 'express';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';
import { BaseError } from '../errors';

export function errorHandlerMiddleware(error: Error, _: Request, res: Response, __: NextFunction) {
  if (error instanceof BaseError) {
    res.status(error.code).json({ message: error.message });
    return;
  }

  res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
    message: ReasonPhrases.INTERNAL_SERVER_ERROR
  });

  console.error(error);
}

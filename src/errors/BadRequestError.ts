import { ReasonPhrases, StatusCodes } from 'http-status-codes';
import { BaseError } from './BaseError';

export class BadRequestError extends BaseError {
  constructor(message = ReasonPhrases.BAD_REQUEST as string) {
    super(StatusCodes.BAD_REQUEST, 'BadRequestError', message);
  }
}

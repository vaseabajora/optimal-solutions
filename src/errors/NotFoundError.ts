import { StatusCodes, ReasonPhrases } from 'http-status-codes';
import { BaseError } from './BaseError';

export class NotFoundError extends BaseError {
  constructor(message = ReasonPhrases.NOT_FOUND as string) {
    super(StatusCodes.NOT_FOUND, 'NotFound', message);
  }
}

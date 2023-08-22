import { CorsOptions } from 'cors';
import { constants } from './constants';

export const CorsConfig: CorsOptions = {
  origin: constants.allowedOrigins,
  methods: constants.allowedMethods,
  credentials: true
};

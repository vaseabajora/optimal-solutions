export const constants = {
  environment: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 8000,

  allowedOrigins: process.env.CORS_ALLOWED_ORIGINS,
  allowedMethods: process.env.CORS_ALLOWED_METHODS,

  closeApiKey: process.env.CLOSE_API_KEY || ''
};

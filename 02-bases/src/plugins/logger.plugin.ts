/* ` This is the `winston` module in JavaScript. which is a popular logging library in JavaScript. */

import winston, { format } from 'winston';

const { combine, timestamp, json } = format;

export const logger = winston.createLogger({
  level: 'info',
  format: combine(timestamp(), json()),
  //defaultMeta: { service: 'user-service' },
  transports: [
    //
    // - Write all logs with importance level of `error` or less to `error.log`
    // - Write all logs with importance level of `info` or less to `combined.log`
    //

    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' }),
  ],
});

//? The code below is to show a traditional console.log
logger.add(
  new winston.transports.Console({
    format: winston.format.simple(),
  })
);

//$ Adapter pattern for doesn't use winston as a hardware.

export const buildLogger = (service: string) => {
  return {
    log: (message: string) => {
      logger.log('info', { message, service });
    },
    error: (message: string) => {
      logger.error('error', { message, service });
    },
  };
};

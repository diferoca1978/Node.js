import { describe, expect, test, it } from '@jest/globals';
import {
  buildLogger,
  logger as winstonLogger,
} from '../../src/plugins/logger.plugin';

describe('plugins/loggerPlugin.ts', () => {
  test('buildLogger() should return log and error methods', () => {
    const logger = buildLogger('test');
    expect(typeof logger.log).toBe('function');
    expect(typeof logger.error).toBe('function');
  });
  test('logger.log should log a message', () => {
    /* The code snippet is creating a mock function `winstonLoggerMock` using `jest.spyOn()` to spy on
    the `log` method of the `winstonLogger` object. */
    const winstonLoggerMock = jest.spyOn(winstonLogger, 'log');

    const message = 'test message';
    const service = 'test service';

    const logger = buildLogger(service);

    logger.log(message);

    expect(winstonLoggerMock).toHaveBeenCalledWith(
      'info',
      expect.objectContaining({
        level: 'info',
        message,
        service,
      })
    );
  });
});

//! it worked but the we need to find how too fix the error above with the word jest.

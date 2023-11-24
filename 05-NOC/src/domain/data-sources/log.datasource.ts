//* This file contains the business rules that we want to work our app functioning

import { LogEntity, LogSeverityLevel } from '../entities/log.entity';

export abstract class LogDataSource {
  abstract saveLog(log: LogEntity): Promise<void>;
  abstract getLogs(severityLevel: LogSeverityLevel): Promise<LogEntity[]>;
}

import { LogModel } from '../../data/mongo';
import { LogDataSource } from '../../domain/data-sources/log.datasource';
import { LogEntity, LogSeverityLevel } from '../../domain/entities/log.entity';

export class MongoLogDataSource implements LogDataSource {
  async saveLog(log: LogEntity): Promise<void> {
    const newLog = await LogModel.create(log);
    // await newLog.save(); // This line will be used if the code above does not create and record the log.
    console.log('Mongo created:', newLog.id);
  }
  async getLogs(severityLevel: LogSeverityLevel): Promise<LogEntity[]> {
    const logs = await LogModel.find({
      level: severityLevel,
    });
    return logs.map((mongoLog) => LogEntity.fromObject(mongoLog));
  }
}

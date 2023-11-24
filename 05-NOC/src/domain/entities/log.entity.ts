//* This entity is the information that we want to record onto our data base, but it doesn't our data base literally.

export enum LogSeverityLevel {
  low = 'low',
  medium = 'medieum',
  high = 'high',
}

export class LogEntity {
  public level: LogSeverityLevel; //enum
  public message: string;
  public createdAt: Date;

  constructor(message: string, level: LogSeverityLevel) {
    this.message = message, 
    this.level = level;
    this.createdAt = new Date();
  }


  static fromJson = (json:string): LogEntity => {
    const {message, level, createdAt} = JSON.parse(json);
    const log = new LogEntity(message, level);
    log.createdAt = new Date(createdAt);
    return log;
  }
}

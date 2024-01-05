import { EmailService } from '../../../presentations/email/email.service';
import { LogEntity, LogSeverityLevel } from '../../entities/log.entity';
import { LogRepository } from '../../repository/log.repository';

interface SendLogEmailUseCase {
  execute: (to: string | string[]) => Promise<boolean>;
}

export class SendEmailLogs implements SendLogEmailUseCase {
  constructor(
    private readonly emailService: EmailService,
    private readonly logRepository: LogRepository
  ) {}
  async execute(to: string | string[]) {
    try {
      //? If the delivery was good, the information will be record correctly in the log file, otherwise it catches the error and pass it as a high severity level.

      const sent = await this.emailService.sendEmailWithFileSysytemLogs(to);
      if (!sent) {
        throw new Error('Email log not sent');
      }

      const log = new LogEntity({
        message: `log email sent successfully`,
        level: LogSeverityLevel.low,
        origin: `send-email-logs.ts`,
      });

      this.logRepository.saveLog(log);

      return true;
    } catch (error) {
      const log = new LogEntity({
        message: `${error}`,
        level: LogSeverityLevel.high,
        origin: `send-email-logs.ts`,
      });

      this.logRepository.saveLog(log);

      return false;
    }
  }
}

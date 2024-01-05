//! Note: When the import returns an error try to follow the indications given to vsCode.

import nodemailer from 'nodemailer';
import { envs } from '../../config/envs.plugin';
import { privateDecrypt } from 'crypto';
import { LogEntity, LogSeverityLevel } from '../../domain/entities/log.entity';

interface SendMailOptions {
  to: string | string[];
  subject: string;
  htmlBody: string;
  attachments?: Attachment[];
}

interface Attachment {
  fileName: string;
  path: string;
}

export class EmailService {
  private transporter = nodemailer.createTransport({
    service: envs.MAILER_SERVICE,
    auth: {
      user: envs.MAILER_EMAIL,
      pass: envs.MAILER_SECRET_KEY,
    },
  });

  constructor() {}

  async sendEmail(options: SendMailOptions): Promise<boolean> {
    const { to, subject, htmlBody, attachments = [] } = options;

    try {
      const sentInformation = await this.transporter.sendMail({
        to: to,
        subject: subject,
        html: htmlBody,
        attachments: attachments,
      });
      //console.log(sentInformation)

      return true;
    } catch (error) {
      return false;
    }
  }
  async sendEmailWithFileSysytemLogs(to: string | string[]) {
    const subject = 'Logs del servidor';
    const htmlBody = `
    <h3>Logs of system - NOC</h3>
    <p>Test to check if the method to send emails with files is workinkg</p>
    <p>To look attached logs</p> 
    `;

    const attachments: Attachment[] = [
      { fileName: 'logs-all.log', path: './logs/logs-all.log' },
      { fileName: 'logs-high.log', path: './logs/logs-high.log' },
      { fileName: 'logs-medium.log', path: './logs/logs-medium.log' },
    ];

    return this.sendEmail({
      to,
      subject,
      htmlBody,
      attachments,
    });
  }
}

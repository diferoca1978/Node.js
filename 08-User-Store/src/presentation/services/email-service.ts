import nodemailer, { Transporter } from 'nodemailer';

export interface SendMailOptions {
  to: string | string[];
  subject: string;
  htmlBody: string;
  attachments?: Attachment[];
}

export interface Attachment {
  fileName: string;
  path: string;
}

export class EmailService {
  private transporter: Transporter;

  constructor(
    mailerService: string,
    mailerEmail: string,
    senderEmailPassword: string,
    private readonly postToProvider: boolean
  ) {
    this.transporter = nodemailer.createTransport({
      service: mailerService,
      auth: {
        user: mailerEmail,
        pass: senderEmailPassword,
      },
    });
  }

  async sendEmail(options: SendMailOptions): Promise<boolean> {
    const { to, subject, htmlBody, attachments = [] } = options;

    try {
      if (!this.postToProvider) return true;

      const sentInformation = await this.transporter.sendMail({
        to: to,
        subject: subject,
        html: htmlBody,
        attachments: attachments,
      });
      //console.log(sentInformation);

      return true;
    } catch (error) {
      console.log(error);
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

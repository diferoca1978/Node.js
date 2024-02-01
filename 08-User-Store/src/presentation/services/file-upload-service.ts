import path from 'path';
import { UploadedFile } from 'express-fileupload';
import fs from 'fs';
import { Uuid } from '../../config';
import { CustomError } from '../../domain';

export class FileUploadService {
  constructor(private readonly uuid = Uuid.v4) {}

  // The method below allow us to know if the folderPath exists.
  private checkFolder(folderPath: string) {
    if (!fs.existsSync(folderPath)) {
      fs.mkdirSync(folderPath);
    }
  }

  async uploadSingleFile(
    file: UploadedFile,
    folder: string = 'uploads',
    validExtension: string[] = ['png', 'jpg', 'jpeg', 'png']
  ) {
    try {
      const fileExtension = file.mimetype.split('/').at(1) ?? '';

      if (!validExtension.includes(fileExtension)) {
        throw CustomError.badRequest(
          `Invalid extensions: ${fileExtension}, Valid ones: ${validExtension}`
        );
      }

      const destination = path.resolve(__dirname, '../../../', folder);
      this.checkFolder(destination);

      const filename = `${this.uuid()}.${fileExtension}`;

      file.mv(`${destination}/${filename}`);

      return { filename };
    } catch (error) {
      throw error;
    }
  }

  uploadMultipleFiles(
    file: any[],
    folder: string = 'uploads',
    validExtension: string[] = ['png', 'jpg', 'jpeg', 'svg', 'png']
  ) {}
}

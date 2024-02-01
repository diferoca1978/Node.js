import { Response, Request } from 'express';
import { CustomError } from '../../domain';
import { FileUploadService } from '../services/file-upload-service';
import { UploadedFile } from 'express-fileupload';

export class FileUploadController {
  // DI
  constructor(private readonly fileUploadService: FileUploadService) {}

  private handleError = (error: unknown, res: Response) => {
    if (error instanceof CustomError) {
      return res.status(error.statusCode).json({ error: error.message });
    }
  };

  uploadFile = (req: Request, res: Response) => {
    const type = req.params.type;
    const validType = ['users', 'categories', 'products'];
    if (!validType.includes(type)) {
      return res
        .status(400)
        .json({ error: `invalid type: ${type}, Valid ones: ${validType}` });
    }

    const file = req.body.files.at(0) as UploadedFile;

    this.fileUploadService
      .uploadSingleFile(file, `uploads/${type}`)
      .then((uploaded) => res.json(uploaded))
      .catch((error) => this.handleError(error, res));
  };

  uploadMultipleFiles = (req: Request, res: Response) => {
    res.json('Upload multiple files');
  };
}

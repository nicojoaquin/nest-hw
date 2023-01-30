import { BadRequestException } from '@nestjs/common';
import {
  FileTypeValidator as DefaultFileTypeValidator,
  FileTypeValidatorOptions,
} from '@nestjs/common';

export class FileTypeValidator extends DefaultFileTypeValidator {
  constructor(
    validationOptions: FileTypeValidatorOptions,
    private message: string,
  ) {
    super(validationOptions);
  }

  isValid(fileOrFiles: Express.Multer.File | Express.Multer.File[]): boolean {
    const isValid = Array.isArray(fileOrFiles)
      ? fileOrFiles.every((file) => super.isValid(file))
      : super.isValid(fileOrFiles);

    if (isValid && Array.isArray(fileOrFiles) && fileOrFiles.length)
      return true;
    throw new BadRequestException(this.message);
  }
}

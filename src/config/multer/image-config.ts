import { ParseFilePipe } from '@nestjs/common';
import { FileTypeValidator } from '../../post-media/pipes/file-type-validator.pipe';

const allowedFiles = ['jpeg', 'jpg', 'JPG', 'JPEG', 'png'];

export default new ParseFilePipe({
  validators: [
    new FileTypeValidator(
      {
        fileType: new RegExp(
          '([a-zA-Z0-9s_\\.-:])+(' + allowedFiles.join('|') + ')$',
        ),
      },
      'Please, select a valid file type',
    ),
  ],
});

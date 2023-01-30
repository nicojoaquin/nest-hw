import {
  Controller,
  Post,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { Public } from 'src/auth/decorators';
import { PostMediaService } from './post-media.service';
import imageConfig from 'src/config/multer/image-config';

@Controller('post-media')
export class PostMediaController {
  constructor(private postMediaService: PostMediaService) {}

  @Public()
  @Post('/upload')
  @UseInterceptors(FilesInterceptor('files'))
  uploadImages(
    @UploadedFiles(imageConfig)
    images: Express.Multer.File[],
  ) {
    return this.postMediaService.uploadImages(images);
  }
}

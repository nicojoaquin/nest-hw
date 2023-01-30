import {
  Controller,
  Post,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { Role } from '@prisma/client';
import { Public, Roles } from 'src/auth/decorators';
import imageValidator from 'src/multer/validators/image.validator';
import { PostMediaService } from 'src/post-media/post-media.service';

@Controller('post-media')
export class PostMediaController {
  constructor(private postMediaService: PostMediaService) {}
  @Public()
  @Post('/upload')
  // @Roles(Role.Admin)
  @UseInterceptors(FilesInterceptor('files'))
  uploadImages(
    @UploadedFiles(imageValidator)
    images: Express.Multer.File[],
  ) {
    return this.postMediaService.uploadImages(images);
  }
}

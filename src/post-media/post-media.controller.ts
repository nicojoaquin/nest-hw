import {
  Controller,
  Post,
  UploadedFiles,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { Role } from '@prisma/client';
import { Roles } from 'src/auth/decorators';
import { RolesGuard } from 'src/auth/guard';
import { RemoveFilesInterceptor } from 'src/interpectors';
import imageValidator from 'src/multer/validators/image.validator';
import { PostMediaService } from 'src/post-media/post-media.service';
import { JwtGuard } from '../auth/guard/jwt.guard';

@UseGuards(JwtGuard, RolesGuard)
@Controller('post-media')
export class PostMediaController {
  constructor(private postMediaService: PostMediaService) {}

  @Post('/upload')
  @Roles(Role.ADMIN)
  @UseInterceptors(FilesInterceptor('files'), RemoveFilesInterceptor)
  uploadImages(
    @UploadedFiles(imageValidator)
    images: Express.Multer.File[],
  ) {
    return this.postMediaService.uploadImages(images);
  }
}

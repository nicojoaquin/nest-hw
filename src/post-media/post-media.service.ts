import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { FileUploaderService } from '../file-uploader/file-uploader.service';
import { MediaType } from '@prisma/client';
import { DeleteImagesDto, UploadImagesDto } from './dto';

@Injectable()
export class PostMediaService {
  constructor(
    private prisma: PrismaService,
    private fileUploaderService: FileUploaderService,
  ) {}

  async uploadImages(images: Express.Multer.File[], dto: UploadImagesDto) {
    const results = await this.fileUploaderService.uploadFiles(images);

    await this.prisma.postMedia.createMany({
      data: results.map(({ Key, Location }) => ({
        key: Key,
        src: Location,
        postId: dto.postId,
        type: MediaType.IMAGE,
        alt: dto.alt,
      })),
    });

    return { images };
  }

  async deleteImages(keys: DeleteImagesDto['keys']) {
    await this.prisma.postMedia.deleteMany({
      where: { key: { in: keys } },
    });

    await this.fileUploaderService.deleteFiles(keys);

    return { succes: true };
  }
}

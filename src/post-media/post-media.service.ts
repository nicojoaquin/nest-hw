import { Injectable } from '@nestjs/common';

@Injectable()
export class PostMediaService {
  async uploadImages(images: Express.Multer.File[]) {
    console.log(images);

    // return {
    //   images: images.map((image) =>
    //     Buffer.from(image.buffer.toString(), 'binary').toString('base64'),
    //   ),
    // };
  }
}

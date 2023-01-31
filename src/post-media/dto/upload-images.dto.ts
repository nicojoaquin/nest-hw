import { Post } from '@prisma/client';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { IsNotExist } from '../../decorators/exists.decorator';

export class UploadImagesDto {
  @IsString({ message: 'Alt field must be a string' })
  alt?: string;

  @IsNumber({}, { message: 'Post id field must be a valid id(number)' })
  @IsNotEmpty({ message: 'Post id field is required' })
  @IsNotExist<Post>(
    { model: 'post', fieldToValidate: 'id' },
    { message: "Post doesn't exist" },
  )
  postId: number;
}

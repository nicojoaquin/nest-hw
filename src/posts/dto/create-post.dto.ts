import { Profile } from '@prisma/client';
import { IsString, IsNotEmpty, IsOptional, IsNumber } from 'class-validator';
import { IsNotExist } from 'src/decorators';

export class CreatePostDto {
  @IsString({ message: 'Title field must be a string' })
  @IsNotEmpty({ message: 'Title field is required' })
  title: string;

  @IsOptional()
  @IsString({ message: 'Description field must be a string' })
  description?: string;
}

export class CreatePostQueryDto {
  @IsNumber()
  @IsNotEmpty({ message: 'User id field is required' })
  @IsNotExist<Profile>(
    { model: 'profile', fieldToValidate: 'userId' },
    { message: "User doesn't exist" },
  )
  user: number;
}

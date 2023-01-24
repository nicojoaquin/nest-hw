import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class CreatePostDto {
  @IsString({ message: 'Title field must be a string' })
  @IsNotEmpty({ message: 'Title field is required' })
  title: string;

  @IsOptional()
  @IsString({ message: 'Description field must be a string' })
  description?: string;
}

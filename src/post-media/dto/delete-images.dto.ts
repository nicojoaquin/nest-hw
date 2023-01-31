import { IsNotEmpty, IsString } from 'class-validator';

export class DeleteImagesDto {
  @IsString({ each: true, message: 'All keys must be a string' })
  @IsNotEmpty({ message: 'Keys field is required' })
  keys: string[];
}

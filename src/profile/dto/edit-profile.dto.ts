import { IsOptional, IsString } from 'class-validator';
export class EditProfileDto {
  @IsString({ message: 'First Name field must be a string' })
  @IsOptional()
  firstName?: string;

  @IsString({ message: 'Last Name field must be a string' })
  @IsOptional()
  lastName?: string;
}

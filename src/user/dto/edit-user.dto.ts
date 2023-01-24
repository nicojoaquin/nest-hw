import { IsEmail, IsOptional, IsString, MinLength } from 'class-validator';

export class EditUserDto {
  @IsEmail({}, { message: 'A valid email is required' })
  @IsOptional()
  email?: string;

  @IsOptional()
  @IsString({ message: 'Password field must be a string' })
  @MinLength(6, { message: 'Password must be 6 characters or more' })
  password?: string;
}

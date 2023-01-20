import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class SigninDto {
  @IsEmail({}, { message: 'A valid email is required' })
  @IsNotEmpty({ message: 'Email field is required' })
  email: string;

  @IsString({ message: 'Password field must be a string' })
  @IsNotEmpty({ message: 'Password field is required' })
  password: string;
}

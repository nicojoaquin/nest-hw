import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';
import { IsAlreadyExist } from 'src/decorators';

export class SignupDto {
  @IsEmail({}, { message: 'A valid email is required' })
  @IsNotEmpty({ message: 'Email field is required' })
  @IsAlreadyExist({ model: 'user' }, { message: 'User already exists' })
  email: string;

  @IsString({ message: 'Password field must be a string' })
  @IsNotEmpty({ message: 'Password field is required' })
  @MinLength(6, { message: 'Password must be 6 characters or more' })
  password: string;

  @IsString({ message: 'First Name field must be a string' })
  @IsNotEmpty({ message: 'First Name field is required' })
  firstName: string;

  @IsString({ message: 'Last Name field must be a string' })
  @IsNotEmpty({ message: 'Last Name field is required' })
  lastName: string;
}

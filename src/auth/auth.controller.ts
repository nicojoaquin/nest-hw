import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { AuthService } from './auth.service';
import { SigninDto, SignupDto } from './dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  signup(@Body() dto: SignupDto) {
    return this.authService.signup(dto);
  }

  @Post('signin')
  async signin(
    @Body() dto: SigninDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    const token = await this.authService.signin(dto);

    res.cookie('token-nesthw', token, {
      httpOnly: true,
      maxAge: 60 * 60 * 24 * 365 * 1000,
    });

    return { success: true };
  }

  @Get('signout')
  async logout(@Res({ passthrough: true }) res: Response) {
    res.cookie('token-nesthw', '', { expires: new Date() });
    return { success: true };
  }
}

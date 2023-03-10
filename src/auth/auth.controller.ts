import { Body, Controller, Post, UsePipes } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ValidationPipe } from 'src/pipes/validation.pipe';
import { User } from 'src/users/users.model';
import { AuthService } from './auth.service';

@ApiTags('Авторизация')
@Controller('auth')
export class AuthController {

  constructor(private authService: AuthService) {}

  @Post('/login')
  login(@Body() dto: User) {
    return this.authService.login(dto);
  }

  @UsePipes(ValidationPipe)
  @Post('/registration')
  registration(@Body() dto: User) {
    return this.authService.registration(dto);
  }
}

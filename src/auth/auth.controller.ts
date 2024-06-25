import { Body, Controller, Headers, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { CredencialDto } from './dto/credencial.dto';

@ApiTags(':: AUTENTICACIÓN ::')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  // @Post('generateToken')
  // generateToken(@Body() credencialDto: CredencialDto) {
  //   return this.authService.generateToken(credencialDto)
  // }

  // @Post('verifyToken')
  // verifyToken(@Headers('token') token: string) {
  //   return this.authService.verifyToken(token)
  // }

}
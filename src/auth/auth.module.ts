import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtAuthService } from 'src/shared/jwt-auth.service';

@Module({
  controllers: [AuthController],
  providers: [AuthService, JwtAuthService],
})
export class AuthModule { }
import { Module } from '@nestjs/common';
import { UsuarioApiService } from './usuario-api.service';
import { UsuarioApiController } from './usuario-api.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioApi } from 'src/models/entities/UsuarioApi';

@Module({
  imports: [TypeOrmModule.forFeature([UsuarioApi])],
  controllers: [UsuarioApiController],
  providers: [UsuarioApiService],
})
export class UsuarioApiModule { }

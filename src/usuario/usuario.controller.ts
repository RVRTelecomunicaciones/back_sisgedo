import { Controller, Get, Post, Body, Param, Delete, UseGuards } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { Usuario } from '../models/entities/Usuario';  // Asegúrate de ajustar la ruta
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtGuard } from 'src/guard/jwt.guard';

@ApiTags(':: USUARIO ::')
@ApiBearerAuth()
@UseGuards(JwtGuard)
@Controller('usuarios')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) { }

  // @Get()
  // findAll(): Promise<Usuario[]> {
  //   return this.usuarioService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string): Promise<Usuario> {
  //   return this.usuarioService.findOne(+id);
  // }

  // @Post()
  // create(@Body() usuario: Usuario): Promise<Usuario> {
  //   return this.usuarioService.create(usuario);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string): Promise<void> {
  //   return this.usuarioService.remove(+id);
  // }
}

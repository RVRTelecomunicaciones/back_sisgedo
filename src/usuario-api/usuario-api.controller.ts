import { Body, Controller, Post } from '@nestjs/common';
import { UsuarioApiService } from './usuario-api.service';
import { ApiTags } from '@nestjs/swagger';
import { CrearUsuarioDto } from './dto/crear-usuario.dto';

@ApiTags(':: USUARIO API ::')
@Controller('usuario-api')
export class UsuarioApiController {
  constructor(private readonly usuarioApiService: UsuarioApiService) { }

  // @Post('create')
  // create(@Body() crearUsuarioDto: CrearUsuarioDto) {
  //   return this.usuarioApiService.create(crearUsuarioDto)
  // }
}

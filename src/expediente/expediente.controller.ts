import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { ExpedienteService } from './expediente.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtGuard } from 'src/guard/jwt.guard';


@ApiTags(':: EXPEDIENTE ::')
@ApiBearerAuth()
@UseGuards(JwtGuard)
@Controller('expediente')
export class ExpedienteController {
  constructor(private readonly expedienteService: ExpedienteService) { }
  @Get('getAll')
  getAll() {
    return this.expedienteService.getAll()
  }

  @Get('getOne/:numero')
  getOne(@Param('numero') numero: number) {
    return this.expedienteService.getOne(numero)
  }
}

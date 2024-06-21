import { Module } from '@nestjs/common';
import { ExpedienteService } from './expediente.service';
import { ExpedienteController } from './expediente.controller';
import { Expediente } from 'src/models/entities/Expediente';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Expediente])],
  controllers: [ExpedienteController],
  providers: [ExpedienteService],
})
export class ExpedienteModule { }

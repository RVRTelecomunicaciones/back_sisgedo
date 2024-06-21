import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Expediente } from 'src/models/entities/Expediente';
import { Repository } from 'typeorm';

@Injectable()
export class ExpedienteService {
    constructor(
        @InjectRepository(Expediente)
        private usuarioRepository: Repository<Expediente>,
    ) { }

    getAll = async () => {
        return await this.usuarioRepository.find()
    }

    getOne = async (numero: number) => {
        return await this.usuarioRepository.findOneBy({
            expeNumeroDoc: numero
        })
    }
}

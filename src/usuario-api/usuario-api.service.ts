import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsuarioApi } from 'src/models/entities/UsuarioApi';
import { Repository } from 'typeorm';
import { CrearUsuarioDto } from './dto/crear-usuario.dto';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class UsuarioApiService {

    constructor(
        @InjectRepository(UsuarioApi) private usuarioRepository: Repository<UsuarioApi>,
    ) { }

    create = async ({ apellidos, ipLocal, ipPublica, nombres }: CrearUsuarioDto) => {
        const codigoUUID: string = uuidv4().replace(/-/g, '')
        const codigoDate: string = Math.floor(Date.now()).toString()
        try {
            const usuario = new UsuarioApi()
            usuario.id = codigoUUID + codigoDate
            usuario.apellidos = apellidos
            usuario.nombres = nombres
            usuario.secret = codigoUUID + codigoDate.split("").reduce((acc, char) => char + acc, "") + codigoUUID.split("").reduce((acc, char) => char + acc, "") + codigoDate
            usuario.ipLocal = ipLocal
            usuario.ipPublica = ipPublica
            usuario.grandType = 'client_credential'
            usuario.estado = true
            const saved: UsuarioApi = await this.usuarioRepository.save(usuario)
            return saved
        } catch (error) {
            throw new InternalServerErrorException(error)
        }
    }

}

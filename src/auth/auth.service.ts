import { Injectable } from '@nestjs/common';
import { JwtAuthService } from 'src/shared/jwt-auth.service';
import { CredencialDto } from './dto/credencial.dto';

@Injectable()
export class AuthService {
    constructor(private readonly jwtAuthService: JwtAuthService) { }
    generateToken = async ({ client_id, client_secret, grant_type }: CredencialDto) => {
        const expiresIn = 3600
        const tokenType = 'Bearer'
        const createAt = Math.floor(Date.now() / 1000)
        const accessToken = await this.jwtAuthService.generateToken(client_id, expiresIn)
        return {
            accessToken,
            expiresIn,
            tokenType,
            createAt
        }
    }

    verifyToken = (token: string) => {
        return this.jwtAuthService.verifyToken(token)
    }
}

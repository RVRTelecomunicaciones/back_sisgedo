import { Injectable, InternalServerErrorException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class JwtAuthService {
    constructor(private jwtService: JwtService) { }

    async generateToken(client_id: string, expiresIn: number) {
        console.log('dadsa')
        const secret = process.env.SECRET_SIGN
        try {
            const accessToken = await this.jwtService.signAsync(
                {
                    id: client_id
                },
                {
                    secret,
                    expiresIn: `${expiresIn}s`,
                }
            )
            return accessToken
        } catch (error) {
            throw new InternalServerErrorException(error)
        }
    }


    async verifyToken(token: string) {
        const secret = process.env.SECRET_SIGN
        try {
            return this.jwtService
                .verifyAsync(token, { secret })
                .then((value) => {
                    return value

                })
                .catch((e) => {
                    if (e.name === 'TokenExpiredError') {
                        return {
                            status: 404,
                            value: false,
                        };
                    }
                    if (e.name === 'JsonWebTokenError')
                        return {
                            status: 999,
                            value: false,
                        };
                });
        } catch (error) {
            throw new InternalServerErrorException()
        }
    }
}
import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
    getToken(){
        return 'token obtenido'
    }
}

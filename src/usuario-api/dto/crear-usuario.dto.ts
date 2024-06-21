import { IsNotEmpty, IsString } from "class-validator";

export class CrearUsuarioDto {
    @IsNotEmpty()
    @IsString()
    apellidos: string
    @IsNotEmpty()
    @IsString()
    nombres: string
    @IsNotEmpty()
    @IsString()
    ipPublica: string
    @IsNotEmpty()
    @IsString()
    ipLocal: string
}
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { AuthService } from './auth/auth.service';
import { UsuarioModule } from './usuario/usuario.module';
import { JwtModule } from '@nestjs/jwt';
import { UsuarioApiModule } from './usuario-api/usuario-api.module';
import { ExpedienteModule } from './expediente/expediente.module';

@Module({
  imports: [
    JwtModule.register({
      global: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: '10.2.0.21',
      port: 5432,
      username: 'juliochavez',
      password: '0vsGmq2##2024',
      database: 'sisgedotemp',
      entities: [__dirname + '/models/entities/*.js'],
      synchronize: false,
    }),
    UsuarioModule,
    AuthModule,
    UsuarioApiModule,
    ExpedienteModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }

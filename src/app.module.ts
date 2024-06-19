import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuarioModule } from './usuario/usuario.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
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
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

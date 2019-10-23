import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CareerModule } from './career/career.module';
import { UsersModule } from './users/users.module';
import { GqlModule } from './gql/gql.module';
import { AuthModule } from './auth/auth.module';
import { CryptoModule } from './crypto/crypto.module';
import { join } from 'path';
require('dotenv').config()
console.log(process.env)

@Module({
  imports: [
    // TypeOrmModule.forRoot(),
    CareerModule,
    AuthModule,
    UsersModule,
    // GqlModule,
    CryptoModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '123',
      database: 'rosebud',
      entities: [join(__dirname, '**/**.entity{.ts,.js}')],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

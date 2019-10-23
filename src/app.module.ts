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

const { 
  MYSQL_PORT,
  MYSQL_HOST,
  MYSQL_USER_NAME,
  MYSQL_PASSWORD,
  MYSQL_DATABASE
} = process.env
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
      host: MYSQL_HOST,
      port: +MYSQL_PORT,
      username: MYSQL_USER_NAME,
      password: MYSQL_PASSWORD,
      database: MYSQL_DATABASE,
      entities: [join(__dirname, '**/**.entity{.ts,.js}')],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

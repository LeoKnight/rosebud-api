import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CareerModule } from './career/career.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { CryptoModule } from './crypto/crypto.module';
import { join } from 'path';
import { DiscussModule } from './discuss/discuss.module';
import { GraphQLModule } from '@nestjs/graphql';
import { DateScalar } from './common/scalars/date.scalar';
require('dotenv').config()

const { 
  MYSQL_PORT=3306,
  MYSQL_HOST="localhost",
  MYSQL_USER_NAME="root",
  MYSQL_PASSWORD,
  MYSQL_DATABASE
} = process.env
@Module({
  imports: [
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
    CareerModule,
    AuthModule,
    UsersModule,
    CryptoModule,
    DiscussModule,
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
      installSubscriptionHandlers: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService,DateScalar],
  
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CareerModule } from './career/career.module';
import { UserModule } from './user/user.module';
import { GqlModule } from './gql/gql.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    CareerModule,
    UserModule,
    GqlModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

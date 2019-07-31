import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';

const gqlConfig = {
  debug: false,
  playground: false,
};
if (true) { // 判断环境
  gqlConfig.debug = true;
  gqlConfig.debug = true;
}

@Module({
  imports: [
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
      definitions: {
        path: join(process.cwd(), 'src/graphql.ts'),
        outputAs: 'class',
      },
    }),
  ],
})
export class GqlModule {}

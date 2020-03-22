import { Test, TestingModule } from '@nestjs/testing';
import { DiscussResolver } from './discuss.resolver';

describe('DiscussResolver', () => {
  let resolver: DiscussResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DiscussResolver],
    }).compile();

    resolver = module.get<DiscussResolver>(DiscussResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});

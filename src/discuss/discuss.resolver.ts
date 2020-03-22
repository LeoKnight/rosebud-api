import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { DiscussService } from './discuss.service'
import { DiscussGuard } from './discuss.guard'
import { UseGuards } from '@nestjs/common';
import { Discuss } from './discuss.entity';
import { CreateDiscussDto } from './dto'

@Resolver('Discuss')
export class DiscussResolver {
    constructor(
        private readonly discussService: DiscussService
    ){}

    @Query()
    @UseGuards(DiscussGuard)
    async getCats() {
        return await this.discussService.findAll();
    }

    @Query('discuss')
    async findOneById(
        @Args('id')
        id: string,
    ): Promise<Discuss> {
        return await this.discussService.findOne(id);
    }

    @Mutation('createDiscuss')
    async create(@Args('createDiscussInput') args: CreateDiscussDto): Promise<Discuss> {
        const createdDiscuss = await this.discussService.create(args);
        return createdDiscuss;
    }
}

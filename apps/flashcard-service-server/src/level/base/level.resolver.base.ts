/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Level } from "./Level";
import { LevelCountArgs } from "./LevelCountArgs";
import { LevelFindManyArgs } from "./LevelFindManyArgs";
import { LevelFindUniqueArgs } from "./LevelFindUniqueArgs";
import { CreateLevelArgs } from "./CreateLevelArgs";
import { UpdateLevelArgs } from "./UpdateLevelArgs";
import { DeleteLevelArgs } from "./DeleteLevelArgs";
import { FlashcardFindManyArgs } from "../../flashcard/base/FlashcardFindManyArgs";
import { Flashcard } from "../../flashcard/base/Flashcard";
import { LevelService } from "../level.service";
@graphql.Resolver(() => Level)
export class LevelResolverBase {
  constructor(protected readonly service: LevelService) {}

  async _levelsMeta(
    @graphql.Args() args: LevelCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Level])
  async levels(@graphql.Args() args: LevelFindManyArgs): Promise<Level[]> {
    return this.service.levels(args);
  }

  @graphql.Query(() => Level, { nullable: true })
  async level(
    @graphql.Args() args: LevelFindUniqueArgs
  ): Promise<Level | null> {
    const result = await this.service.level(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Level)
  async createLevel(@graphql.Args() args: CreateLevelArgs): Promise<Level> {
    return await this.service.createLevel({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Level)
  async updateLevel(
    @graphql.Args() args: UpdateLevelArgs
  ): Promise<Level | null> {
    try {
      return await this.service.updateLevel({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Level)
  async deleteLevel(
    @graphql.Args() args: DeleteLevelArgs
  ): Promise<Level | null> {
    try {
      return await this.service.deleteLevel(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [Flashcard], { name: "flashcards" })
  async findFlashcards(
    @graphql.Parent() parent: Level,
    @graphql.Args() args: FlashcardFindManyArgs
  ): Promise<Flashcard[]> {
    const results = await this.service.findFlashcards(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}
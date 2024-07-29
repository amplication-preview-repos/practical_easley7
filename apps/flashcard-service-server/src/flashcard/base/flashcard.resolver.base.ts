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
import { Flashcard } from "./Flashcard";
import { FlashcardCountArgs } from "./FlashcardCountArgs";
import { FlashcardFindManyArgs } from "./FlashcardFindManyArgs";
import { FlashcardFindUniqueArgs } from "./FlashcardFindUniqueArgs";
import { CreateFlashcardArgs } from "./CreateFlashcardArgs";
import { UpdateFlashcardArgs } from "./UpdateFlashcardArgs";
import { DeleteFlashcardArgs } from "./DeleteFlashcardArgs";
import { Category } from "../../category/base/Category";
import { Language } from "../../language/base/Language";
import { Level } from "../../level/base/Level";
import { FlashcardService } from "../flashcard.service";
@graphql.Resolver(() => Flashcard)
export class FlashcardResolverBase {
  constructor(protected readonly service: FlashcardService) {}

  async _flashcardsMeta(
    @graphql.Args() args: FlashcardCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Flashcard])
  async flashcards(
    @graphql.Args() args: FlashcardFindManyArgs
  ): Promise<Flashcard[]> {
    return this.service.flashcards(args);
  }

  @graphql.Query(() => Flashcard, { nullable: true })
  async flashcard(
    @graphql.Args() args: FlashcardFindUniqueArgs
  ): Promise<Flashcard | null> {
    const result = await this.service.flashcard(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Flashcard)
  async createFlashcard(
    @graphql.Args() args: CreateFlashcardArgs
  ): Promise<Flashcard> {
    return await this.service.createFlashcard({
      ...args,
      data: {
        ...args.data,

        category: args.data.category
          ? {
              connect: args.data.category,
            }
          : undefined,

        language: args.data.language
          ? {
              connect: args.data.language,
            }
          : undefined,

        level: args.data.level
          ? {
              connect: args.data.level,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => Flashcard)
  async updateFlashcard(
    @graphql.Args() args: UpdateFlashcardArgs
  ): Promise<Flashcard | null> {
    try {
      return await this.service.updateFlashcard({
        ...args,
        data: {
          ...args.data,

          category: args.data.category
            ? {
                connect: args.data.category,
              }
            : undefined,

          language: args.data.language
            ? {
                connect: args.data.language,
              }
            : undefined,

          level: args.data.level
            ? {
                connect: args.data.level,
              }
            : undefined,
        },
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

  @graphql.Mutation(() => Flashcard)
  async deleteFlashcard(
    @graphql.Args() args: DeleteFlashcardArgs
  ): Promise<Flashcard | null> {
    try {
      return await this.service.deleteFlashcard(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => Category, {
    nullable: true,
    name: "category",
  })
  async getCategory(
    @graphql.Parent() parent: Flashcard
  ): Promise<Category | null> {
    const result = await this.service.getCategory(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @graphql.ResolveField(() => Language, {
    nullable: true,
    name: "language",
  })
  async getLanguage(
    @graphql.Parent() parent: Flashcard
  ): Promise<Language | null> {
    const result = await this.service.getLanguage(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @graphql.ResolveField(() => Level, {
    nullable: true,
    name: "level",
  })
  async getLevel(@graphql.Parent() parent: Flashcard): Promise<Level | null> {
    const result = await this.service.getLevel(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
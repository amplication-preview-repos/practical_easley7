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
import { UserSet } from "./UserSet";
import { UserSetCountArgs } from "./UserSetCountArgs";
import { UserSetFindManyArgs } from "./UserSetFindManyArgs";
import { UserSetFindUniqueArgs } from "./UserSetFindUniqueArgs";
import { DeleteUserSetArgs } from "./DeleteUserSetArgs";
import { UserSetService } from "../userSet.service";
@graphql.Resolver(() => UserSet)
export class UserSetResolverBase {
  constructor(protected readonly service: UserSetService) {}

  async _userSetsMeta(
    @graphql.Args() args: UserSetCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [UserSet])
  async userSets(
    @graphql.Args() args: UserSetFindManyArgs
  ): Promise<UserSet[]> {
    return this.service.userSets(args);
  }

  @graphql.Query(() => UserSet, { nullable: true })
  async userSet(
    @graphql.Args() args: UserSetFindUniqueArgs
  ): Promise<UserSet | null> {
    const result = await this.service.userSet(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => UserSet)
  async deleteUserSet(
    @graphql.Args() args: DeleteUserSetArgs
  ): Promise<UserSet | null> {
    try {
      return await this.service.deleteUserSet(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}

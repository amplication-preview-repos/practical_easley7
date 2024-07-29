/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { UserSetService } from "../userSet.service";
import { UserSetCreateInput } from "./UserSetCreateInput";
import { UserSet } from "./UserSet";
import { UserSetFindManyArgs } from "./UserSetFindManyArgs";
import { UserSetWhereUniqueInput } from "./UserSetWhereUniqueInput";
import { UserSetUpdateInput } from "./UserSetUpdateInput";

export class UserSetControllerBase {
  constructor(protected readonly service: UserSetService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: UserSet })
  async createUserSet(
    @common.Body() data: UserSetCreateInput
  ): Promise<UserSet> {
    return await this.service.createUserSet({
      data: data,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [UserSet] })
  @ApiNestedQuery(UserSetFindManyArgs)
  async userSets(@common.Req() request: Request): Promise<UserSet[]> {
    const args = plainToClass(UserSetFindManyArgs, request.query);
    return this.service.userSets({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: UserSet })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async userSet(
    @common.Param() params: UserSetWhereUniqueInput
  ): Promise<UserSet | null> {
    const result = await this.service.userSet({
      where: params,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: UserSet })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateUserSet(
    @common.Param() params: UserSetWhereUniqueInput,
    @common.Body() data: UserSetUpdateInput
  ): Promise<UserSet | null> {
    try {
      return await this.service.updateUserSet({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: UserSet })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteUserSet(
    @common.Param() params: UserSetWhereUniqueInput
  ): Promise<UserSet | null> {
    try {
      return await this.service.deleteUserSet({
        where: params,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}

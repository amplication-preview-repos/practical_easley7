/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { UserSetWhereUniqueInput } from "../../userSet/base/UserSetWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class UserSetUpdateManyWithoutUsersInput {
  @Field(() => [UserSetWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [UserSetWhereUniqueInput],
  })
  connect?: Array<UserSetWhereUniqueInput>;

  @Field(() => [UserSetWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [UserSetWhereUniqueInput],
  })
  disconnect?: Array<UserSetWhereUniqueInput>;

  @Field(() => [UserSetWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [UserSetWhereUniqueInput],
  })
  set?: Array<UserSetWhereUniqueInput>;
}

export { UserSetUpdateManyWithoutUsersInput as UserSetUpdateManyWithoutUsersInput };

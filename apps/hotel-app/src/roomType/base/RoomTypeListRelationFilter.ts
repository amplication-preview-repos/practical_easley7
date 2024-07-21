/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { RoomTypeWhereInput } from "./RoomTypeWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class RoomTypeListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => RoomTypeWhereInput,
  })
  @ValidateNested()
  @Type(() => RoomTypeWhereInput)
  @IsOptional()
  @Field(() => RoomTypeWhereInput, {
    nullable: true,
  })
  every?: RoomTypeWhereInput;

  @ApiProperty({
    required: false,
    type: () => RoomTypeWhereInput,
  })
  @ValidateNested()
  @Type(() => RoomTypeWhereInput)
  @IsOptional()
  @Field(() => RoomTypeWhereInput, {
    nullable: true,
  })
  some?: RoomTypeWhereInput;

  @ApiProperty({
    required: false,
    type: () => RoomTypeWhereInput,
  })
  @ValidateNested()
  @Type(() => RoomTypeWhereInput)
  @IsOptional()
  @Field(() => RoomTypeWhereInput, {
    nullable: true,
  })
  none?: RoomTypeWhereInput;
}
export { RoomTypeListRelationFilter as RoomTypeListRelationFilter };
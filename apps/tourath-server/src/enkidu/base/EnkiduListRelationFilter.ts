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
import { EnkiduWhereInput } from "./EnkiduWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class EnkiduListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => EnkiduWhereInput,
  })
  @ValidateNested()
  @Type(() => EnkiduWhereInput)
  @IsOptional()
  @Field(() => EnkiduWhereInput, {
    nullable: true,
  })
  every?: EnkiduWhereInput;

  @ApiProperty({
    required: false,
    type: () => EnkiduWhereInput,
  })
  @ValidateNested()
  @Type(() => EnkiduWhereInput)
  @IsOptional()
  @Field(() => EnkiduWhereInput, {
    nullable: true,
  })
  some?: EnkiduWhereInput;

  @ApiProperty({
    required: false,
    type: () => EnkiduWhereInput,
  })
  @ValidateNested()
  @Type(() => EnkiduWhereInput)
  @IsOptional()
  @Field(() => EnkiduWhereInput, {
    nullable: true,
  })
  none?: EnkiduWhereInput;
}
export { EnkiduListRelationFilter as EnkiduListRelationFilter };
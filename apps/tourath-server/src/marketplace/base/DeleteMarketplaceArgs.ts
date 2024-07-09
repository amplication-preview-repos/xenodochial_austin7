/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { MarketplaceWhereUniqueInput } from "./MarketplaceWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class DeleteMarketplaceArgs {
  @ApiProperty({
    required: true,
    type: () => MarketplaceWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => MarketplaceWhereUniqueInput)
  @Field(() => MarketplaceWhereUniqueInput, { nullable: false })
  where!: MarketplaceWhereUniqueInput;
}

export { DeleteMarketplaceArgs as DeleteMarketplaceArgs };
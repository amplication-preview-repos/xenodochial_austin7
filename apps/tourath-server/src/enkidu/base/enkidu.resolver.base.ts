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
import { Enkidu } from "./Enkidu";
import { EnkiduCountArgs } from "./EnkiduCountArgs";
import { EnkiduFindManyArgs } from "./EnkiduFindManyArgs";
import { EnkiduFindUniqueArgs } from "./EnkiduFindUniqueArgs";
import { CreateEnkiduArgs } from "./CreateEnkiduArgs";
import { UpdateEnkiduArgs } from "./UpdateEnkiduArgs";
import { DeleteEnkiduArgs } from "./DeleteEnkiduArgs";
import { EnkiduService } from "../enkidu.service";
@graphql.Resolver(() => Enkidu)
export class EnkiduResolverBase {
  constructor(protected readonly service: EnkiduService) {}

  async _enkidusMeta(
    @graphql.Args() args: EnkiduCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Enkidu])
  async enkidus(@graphql.Args() args: EnkiduFindManyArgs): Promise<Enkidu[]> {
    return this.service.enkidus(args);
  }

  @graphql.Query(() => Enkidu, { nullable: true })
  async enkidu(
    @graphql.Args() args: EnkiduFindUniqueArgs
  ): Promise<Enkidu | null> {
    const result = await this.service.enkidu(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Enkidu)
  async createEnkidu(@graphql.Args() args: CreateEnkiduArgs): Promise<Enkidu> {
    return await this.service.createEnkidu({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Enkidu)
  async updateEnkidu(
    @graphql.Args() args: UpdateEnkiduArgs
  ): Promise<Enkidu | null> {
    try {
      return await this.service.updateEnkidu({
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

  @graphql.Mutation(() => Enkidu)
  async deleteEnkidu(
    @graphql.Args() args: DeleteEnkiduArgs
  ): Promise<Enkidu | null> {
    try {
      return await this.service.deleteEnkidu(args);
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

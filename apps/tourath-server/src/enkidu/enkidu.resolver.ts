import * as graphql from "@nestjs/graphql";
import { EnkiduResolverBase } from "./base/enkidu.resolver.base";
import { Enkidu } from "./base/Enkidu";
import { EnkiduService } from "./enkidu.service";

@graphql.Resolver(() => Enkidu)
export class EnkiduResolver extends EnkiduResolverBase {
  constructor(protected readonly service: EnkiduService) {
    super(service);
  }
}

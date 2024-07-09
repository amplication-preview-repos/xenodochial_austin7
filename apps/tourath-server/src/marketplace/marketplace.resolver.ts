import * as graphql from "@nestjs/graphql";
import { MarketplaceResolverBase } from "./base/marketplace.resolver.base";
import { Marketplace } from "./base/Marketplace";
import { MarketplaceService } from "./marketplace.service";

@graphql.Resolver(() => Marketplace)
export class MarketplaceResolver extends MarketplaceResolverBase {
  constructor(protected readonly service: MarketplaceService) {
    super(service);
  }
}

import { Module } from "@nestjs/common";
import { MarketplaceModuleBase } from "./base/marketplace.module.base";
import { MarketplaceService } from "./marketplace.service";
import { MarketplaceController } from "./marketplace.controller";
import { MarketplaceResolver } from "./marketplace.resolver";

@Module({
  imports: [MarketplaceModuleBase],
  controllers: [MarketplaceController],
  providers: [MarketplaceService, MarketplaceResolver],
  exports: [MarketplaceService],
})
export class MarketplaceModule {}

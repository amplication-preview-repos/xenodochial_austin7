import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { MarketplaceService } from "./marketplace.service";
import { MarketplaceControllerBase } from "./base/marketplace.controller.base";

@swagger.ApiTags("marketplaces")
@common.Controller("marketplaces")
export class MarketplaceController extends MarketplaceControllerBase {
  constructor(protected readonly service: MarketplaceService) {
    super(service);
  }
}

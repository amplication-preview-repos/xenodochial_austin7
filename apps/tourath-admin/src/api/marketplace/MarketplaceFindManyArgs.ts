import { MarketplaceWhereInput } from "./MarketplaceWhereInput";
import { MarketplaceOrderByInput } from "./MarketplaceOrderByInput";

export type MarketplaceFindManyArgs = {
  where?: MarketplaceWhereInput;
  orderBy?: Array<MarketplaceOrderByInput>;
  skip?: number;
  take?: number;
};

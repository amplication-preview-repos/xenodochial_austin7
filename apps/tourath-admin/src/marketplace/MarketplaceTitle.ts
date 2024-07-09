import { Marketplace as TMarketplace } from "../api/marketplace/Marketplace";

export const MARKETPLACE_TITLE_FIELD = "productName";

export const MarketplaceTitle = (record: TMarketplace): string => {
  return record.productName?.toString() || String(record.id);
};

import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MarketplaceServiceBase } from "./base/marketplace.service.base";

@Injectable()
export class MarketplaceService extends MarketplaceServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

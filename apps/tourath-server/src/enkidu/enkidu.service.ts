import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { EnkiduServiceBase } from "./base/enkidu.service.base";

@Injectable()
export class EnkiduService extends EnkiduServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

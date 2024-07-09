import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TourathNativeExperiencesServiceBase } from "./base/tourathNativeExperiences.service.base";

@Injectable()
export class TourathNativeExperiencesService extends TourathNativeExperiencesServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

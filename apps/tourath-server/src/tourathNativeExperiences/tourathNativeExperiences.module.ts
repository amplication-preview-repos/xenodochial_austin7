import { Module } from "@nestjs/common";
import { TourathNativeExperiencesModuleBase } from "./base/tourathNativeExperiences.module.base";
import { TourathNativeExperiencesService } from "./tourathNativeExperiences.service";
import { TourathNativeExperiencesController } from "./tourathNativeExperiences.controller";
import { TourathNativeExperiencesResolver } from "./tourathNativeExperiences.resolver";

@Module({
  imports: [TourathNativeExperiencesModuleBase],
  controllers: [TourathNativeExperiencesController],
  providers: [
    TourathNativeExperiencesService,
    TourathNativeExperiencesResolver,
  ],
  exports: [TourathNativeExperiencesService],
})
export class TourathNativeExperiencesModule {}

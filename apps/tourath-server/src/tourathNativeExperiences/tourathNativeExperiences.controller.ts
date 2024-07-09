import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TourathNativeExperiencesService } from "./tourathNativeExperiences.service";
import { TourathNativeExperiencesControllerBase } from "./base/tourathNativeExperiences.controller.base";

@swagger.ApiTags("tourathNativeExperiences")
@common.Controller("tourathNativeExperiences")
export class TourathNativeExperiencesController extends TourathNativeExperiencesControllerBase {
  constructor(protected readonly service: TourathNativeExperiencesService) {
    super(service);
  }
}

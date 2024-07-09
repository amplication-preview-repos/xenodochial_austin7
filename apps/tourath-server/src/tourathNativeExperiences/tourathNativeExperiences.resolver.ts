import * as graphql from "@nestjs/graphql";
import { TourathNativeExperiencesResolverBase } from "./base/tourathNativeExperiences.resolver.base";
import { TourathNativeExperiences } from "./base/TourathNativeExperiences";
import { TourathNativeExperiencesService } from "./tourathNativeExperiences.service";

@graphql.Resolver(() => TourathNativeExperiences)
export class TourathNativeExperiencesResolver extends TourathNativeExperiencesResolverBase {
  constructor(protected readonly service: TourathNativeExperiencesService) {
    super(service);
  }
}

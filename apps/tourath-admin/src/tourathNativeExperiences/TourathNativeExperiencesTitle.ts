import { TourathNativeExperiences as TTourathNativeExperiences } from "../api/tourathNativeExperiences/TourathNativeExperiences";

export const TOURATHNATIVEEXPERIENCES_TITLE_FIELD = "experienceName";

export const TourathNativeExperiencesTitle = (
  record: TTourathNativeExperiences
): string => {
  return record.experienceName?.toString() || String(record.id);
};

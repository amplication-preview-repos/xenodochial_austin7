import { Enkidu as TEnkidu } from "../api/enkidu/Enkidu";

export const ENKIDU_TITLE_FIELD = "eventName";

export const EnkiduTitle = (record: TEnkidu): string => {
  return record.eventName?.toString() || String(record.id);
};

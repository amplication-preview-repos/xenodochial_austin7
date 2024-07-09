import { SortOrder } from "../../util/SortOrder";

export type EnkiduOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  eventName?: SortOrder;
  startDate?: SortOrder;
  endDate?: SortOrder;
  location?: SortOrder;
  description?: SortOrder;
  capacity?: SortOrder;
  host?: SortOrder;
};

import { EnkiduWhereInput } from "./EnkiduWhereInput";
import { EnkiduOrderByInput } from "./EnkiduOrderByInput";

export type EnkiduFindManyArgs = {
  where?: EnkiduWhereInput;
  orderBy?: Array<EnkiduOrderByInput>;
  skip?: number;
  take?: number;
};

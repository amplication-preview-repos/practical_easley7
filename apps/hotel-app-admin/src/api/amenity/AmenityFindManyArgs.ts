import { AmenityWhereInput } from "./AmenityWhereInput";
import { AmenityOrderByInput } from "./AmenityOrderByInput";

export type AmenityFindManyArgs = {
  where?: AmenityWhereInput;
  orderBy?: Array<AmenityOrderByInput>;
  skip?: number;
  take?: number;
};

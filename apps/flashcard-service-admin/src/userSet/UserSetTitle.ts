import { UserSet as TUserSet } from "../api/userSet/UserSet";

export const USERSET_TITLE_FIELD = "id";

export const UserSetTitle = (record: TUserSet): string => {
  return record.id?.toString() || String(record.id);
};

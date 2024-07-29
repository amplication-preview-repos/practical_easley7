import { Level as TLevel } from "../api/level/Level";

export const LEVEL_TITLE_FIELD = "id";

export const LevelTitle = (record: TLevel): string => {
  return record.id?.toString() || String(record.id);
};

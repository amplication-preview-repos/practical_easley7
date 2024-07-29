import { Language as TLanguage } from "../api/language/Language";

export const LANGUAGE_TITLE_FIELD = "id";

export const LanguageTitle = (record: TLanguage): string => {
  return record.id?.toString() || String(record.id);
};

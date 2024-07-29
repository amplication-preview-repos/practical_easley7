import { Flashcard as TFlashcard } from "../api/flashcard/Flashcard";

export const FLASHCARD_TITLE_FIELD = "categoryId";

export const FlashcardTitle = (record: TFlashcard): string => {
  return record.categoryId?.toString() || String(record.id);
};

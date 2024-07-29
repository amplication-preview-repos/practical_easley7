import { FlashcardCreateNestedManyWithoutLanguagesInput } from "./FlashcardCreateNestedManyWithoutLanguagesInput";

export type LanguageCreateInput = {
  flashcards?: FlashcardCreateNestedManyWithoutLanguagesInput;
};

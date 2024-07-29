import { FlashcardListRelationFilter } from "../flashcard/FlashcardListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type LanguageWhereInput = {
  flashcards?: FlashcardListRelationFilter;
  id?: StringFilter;
};

import { FlashcardListRelationFilter } from "../flashcard/FlashcardListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type CategoryWhereInput = {
  flashcards?: FlashcardListRelationFilter;
  id?: StringFilter;
};

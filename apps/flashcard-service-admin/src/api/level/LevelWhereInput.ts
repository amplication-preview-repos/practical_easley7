import { FlashcardListRelationFilter } from "../flashcard/FlashcardListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type LevelWhereInput = {
  flashcards?: FlashcardListRelationFilter;
  id?: StringFilter;
};

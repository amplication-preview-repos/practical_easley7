import { Flashcard } from "../flashcard/Flashcard";

export type Language = {
  createdAt: Date;
  flashcards?: Array<Flashcard>;
  id: string;
  updatedAt: Date;
};

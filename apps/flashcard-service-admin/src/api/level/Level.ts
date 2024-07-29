import { Flashcard } from "../flashcard/Flashcard";

export type Level = {
  createdAt: Date;
  flashcards?: Array<Flashcard>;
  id: string;
  updatedAt: Date;
};

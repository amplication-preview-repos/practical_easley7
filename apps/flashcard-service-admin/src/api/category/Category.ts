import { Flashcard } from "../flashcard/Flashcard";

export type Category = {
  createdAt: Date;
  flashcards?: Array<Flashcard>;
  id: string;
  updatedAt: Date;
};

import { Category } from "../category/Category";
import { Language } from "../language/Language";
import { Level } from "../level/Level";

export type Flashcard = {
  category?: Category | null;
  categoryId: string | null;
  createdAt: Date;
  id: string;
  language?: Language | null;
  languageId: string | null;
  level?: Level | null;
  levelId: string | null;
  updatedAt: Date;
};

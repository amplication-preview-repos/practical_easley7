import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { LanguageWhereUniqueInput } from "../language/LanguageWhereUniqueInput";
import { LevelWhereUniqueInput } from "../level/LevelWhereUniqueInput";

export type FlashcardCreateInput = {
  category?: CategoryWhereUniqueInput | null;
  categoryId?: string | null;
  language?: LanguageWhereUniqueInput | null;
  languageId?: string | null;
  level?: LevelWhereUniqueInput | null;
  levelId?: string | null;
};

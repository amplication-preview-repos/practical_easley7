import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { LanguageWhereUniqueInput } from "../language/LanguageWhereUniqueInput";
import { LevelWhereUniqueInput } from "../level/LevelWhereUniqueInput";

export type FlashcardWhereInput = {
  category?: CategoryWhereUniqueInput;
  categoryId?: StringNullableFilter;
  id?: StringFilter;
  language?: LanguageWhereUniqueInput;
  languageId?: StringNullableFilter;
  level?: LevelWhereUniqueInput;
  levelId?: StringNullableFilter;
};

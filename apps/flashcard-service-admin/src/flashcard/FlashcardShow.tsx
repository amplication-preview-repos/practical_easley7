import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import { CATEGORY_TITLE_FIELD } from "../category/CategoryTitle";
import { LANGUAGE_TITLE_FIELD } from "../language/LanguageTitle";
import { LEVEL_TITLE_FIELD } from "../level/LevelTitle";

export const FlashcardShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField
          label="category"
          source="category.id"
          reference="Category"
        >
          <TextField source={CATEGORY_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="categoryId" source="categoryId" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <ReferenceField
          label="language"
          source="language.id"
          reference="Language"
        >
          <TextField source={LANGUAGE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="languageId" source="languageId" />
        <ReferenceField label="level" source="level.id" reference="Level">
          <TextField source={LEVEL_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="levelId" source="levelId" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};

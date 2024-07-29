import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { CategoryTitle } from "../category/CategoryTitle";
import { LanguageTitle } from "../language/LanguageTitle";
import { LevelTitle } from "../level/LevelTitle";

export const FlashcardCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="category.id"
          reference="Category"
          label="category"
        >
          <SelectInput optionText={CategoryTitle} />
        </ReferenceInput>
        <TextInput label="categoryId" source="categoryId" />
        <ReferenceInput
          source="language.id"
          reference="Language"
          label="language"
        >
          <SelectInput optionText={LanguageTitle} />
        </ReferenceInput>
        <TextInput label="languageId" source="languageId" />
        <ReferenceInput source="level.id" reference="Level" label="level">
          <SelectInput optionText={LevelTitle} />
        </ReferenceInput>
        <TextInput label="levelId" source="levelId" />
      </SimpleForm>
    </Create>
  );
};

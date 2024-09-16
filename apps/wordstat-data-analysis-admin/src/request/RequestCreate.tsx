import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { KeywordTitle } from "../keyword/KeywordTitle";
import { SearchResultTitle } from "../searchResult/SearchResultTitle";

export const RequestCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="keyword.id" reference="Keyword" label="keyword">
          <SelectInput optionText={KeywordTitle} />
        </ReferenceInput>
        <DateTimeInput label="requestedAt" source="requestedAt" />
        <ReferenceArrayInput source="searchResults" reference="SearchResult">
          <SelectArrayInput
            optionText={SearchResultTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};

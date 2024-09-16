import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { KeywordTitle } from "../keyword/KeywordTitle";

export const TrendAnalysisCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="analyzedAt" source="analyzedAt" />
        <ReferenceInput source="keyword.id" reference="Keyword" label="keyword">
          <SelectInput optionText={KeywordTitle} />
        </ReferenceInput>
        <div />
      </SimpleForm>
    </Create>
  );
};

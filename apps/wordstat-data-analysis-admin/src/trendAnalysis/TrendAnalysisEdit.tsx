import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { KeywordTitle } from "../keyword/KeywordTitle";

export const TrendAnalysisEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="analyzedAt" source="analyzedAt" />
        <ReferenceInput source="keyword.id" reference="Keyword" label="keyword">
          <SelectInput optionText={KeywordTitle} />
        </ReferenceInput>
        <div />
      </SimpleForm>
    </Edit>
  );
};

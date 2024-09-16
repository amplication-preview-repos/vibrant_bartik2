import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { RequestTitle } from "../request/RequestTitle";
import { TrendAnalysisTitle } from "../trendAnalysis/TrendAnalysisTitle";

export const KeywordCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="keyword" source="keyword" />
        <ReferenceArrayInput source="requests" reference="Request">
          <SelectArrayInput
            optionText={RequestTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceArrayInput source="trendAnalyses" reference="TrendAnalysis">
          <SelectArrayInput
            optionText={TrendAnalysisTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};

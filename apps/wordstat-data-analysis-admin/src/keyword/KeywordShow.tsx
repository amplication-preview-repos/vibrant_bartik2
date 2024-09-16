import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { KEYWORD_TITLE_FIELD } from "./KeywordTitle";

export const KeywordShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="keyword" source="keyword" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Request"
          target="keywordId"
          label="Requests"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="keyword"
              source="keyword.id"
              reference="Keyword"
            >
              <TextField source={KEYWORD_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="requestedAt" source="requestedAt" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="TrendAnalysis"
          target="keywordId"
          label="TrendAnalyses"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <TextField label="analyzedAt" source="analyzedAt" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="keyword"
              source="keyword.id"
              reference="Keyword"
            >
              <TextField source={KEYWORD_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="trendData" source="trendData" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};

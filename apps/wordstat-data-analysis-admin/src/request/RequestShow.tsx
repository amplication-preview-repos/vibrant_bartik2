import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { REQUEST_TITLE_FIELD } from "./RequestTitle";
import { KEYWORD_TITLE_FIELD } from "../keyword/KeywordTitle";

export const RequestShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <ReferenceField label="keyword" source="keyword.id" reference="Keyword">
          <TextField source={KEYWORD_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="requestedAt" source="requestedAt" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="SearchResult"
          target="requestId"
          label="SearchResults"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="request"
              source="request.id"
              reference="Request"
            >
              <TextField source={REQUEST_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="resultData" source="resultData" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};

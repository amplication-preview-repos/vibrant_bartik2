import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { REQUEST_TITLE_FIELD } from "../request/RequestTitle";

export const SearchResultShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <ReferenceField label="request" source="request.id" reference="Request">
          <TextField source={REQUEST_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="resultData" source="resultData" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};

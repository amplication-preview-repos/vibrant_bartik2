import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { REQUEST_TITLE_FIELD } from "../request/RequestTitle";

export const SearchResultList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"SearchResults"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <ReferenceField label="request" source="request.id" reference="Request">
          <TextField source={REQUEST_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="resultData" source="resultData" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};

import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { KEYWORD_TITLE_FIELD } from "../keyword/KeywordTitle";

export const TrendAnalysisList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"TrendAnalyses"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="analyzedAt" source="analyzedAt" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <ReferenceField label="keyword" source="keyword.id" reference="Keyword">
          <TextField source={KEYWORD_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="trendData" source="trendData" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};

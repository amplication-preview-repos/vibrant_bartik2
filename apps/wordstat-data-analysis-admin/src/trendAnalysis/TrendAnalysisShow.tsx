import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { KEYWORD_TITLE_FIELD } from "../keyword/KeywordTitle";

export const TrendAnalysisShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="analyzedAt" source="analyzedAt" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <ReferenceField label="keyword" source="keyword.id" reference="Keyword">
          <TextField source={KEYWORD_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="trendData" source="trendData" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};

import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { RequestTitle } from "../request/RequestTitle";

export const SearchResultEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="request.id" reference="Request" label="request">
          <SelectInput optionText={RequestTitle} />
        </ReferenceInput>
        <div />
      </SimpleForm>
    </Edit>
  );
};

import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  NumberInput,
} from "react-admin";

export const EnkiduEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="eventName" source="eventName" />
        <DateTimeInput label="startDate" source="startDate" />
        <DateTimeInput label="endDate" source="endDate" />
        <TextInput label="location" source="location" />
        <TextInput label="description" multiline source="description" />
        <NumberInput step={1} label="capacity" source="capacity" />
        <TextInput label="host" source="host" />
      </SimpleForm>
    </Edit>
  );
};

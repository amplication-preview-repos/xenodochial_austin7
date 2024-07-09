import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  NumberInput,
} from "react-admin";

export const EnkiduCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="eventName" source="eventName" />
        <DateTimeInput label="startDate" source="startDate" />
        <DateTimeInput label="endDate" source="endDate" />
        <TextInput label="location" source="location" />
        <TextInput label="description" multiline source="description" />
        <NumberInput step={1} label="capacity" source="capacity" />
        <TextInput label="host" source="host" />
      </SimpleForm>
    </Create>
  );
};

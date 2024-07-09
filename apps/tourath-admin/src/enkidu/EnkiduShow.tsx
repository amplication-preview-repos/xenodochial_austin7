import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const EnkiduShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="eventName" source="eventName" />
        <TextField label="startDate" source="startDate" />
        <TextField label="endDate" source="endDate" />
        <TextField label="location" source="location" />
        <TextField label="description" source="description" />
        <TextField label="capacity" source="capacity" />
        <TextField label="host" source="host" />
      </SimpleShowLayout>
    </Show>
  );
};

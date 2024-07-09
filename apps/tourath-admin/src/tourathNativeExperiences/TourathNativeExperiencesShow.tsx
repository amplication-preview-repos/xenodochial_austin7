import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  BooleanField,
} from "react-admin";

export const TourathNativeExperiencesShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="experienceName" source="experienceName" />
        <TextField label="description" source="description" />
        <TextField label="location" source="location" />
        <TextField label="price" source="price" />
        <TextField label="duration" source="duration" />
        <TextField label="capacity" source="capacity" />
        <BooleanField label="availability" source="availability" />
      </SimpleShowLayout>
    </Show>
  );
};

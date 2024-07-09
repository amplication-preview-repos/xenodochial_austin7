import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  BooleanInput,
} from "react-admin";

export const TourathNativeExperiencesCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="experienceName" source="experienceName" />
        <TextInput label="description" multiline source="description" />
        <TextInput label="location" source="location" />
        <NumberInput label="price" source="price" />
        <NumberInput step={1} label="duration" source="duration" />
        <NumberInput step={1} label="capacity" source="capacity" />
        <BooleanInput label="availability" source="availability" />
      </SimpleForm>
    </Create>
  );
};

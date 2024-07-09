import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  BooleanInput,
} from "react-admin";

export const TourathNativeExperiencesEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="experienceName" source="experienceName" />
        <TextInput label="description" multiline source="description" />
        <TextInput label="location" source="location" />
        <NumberInput label="price" source="price" />
        <NumberInput step={1} label="duration" source="duration" />
        <NumberInput step={1} label="capacity" source="capacity" />
        <BooleanInput label="availability" source="availability" />
      </SimpleForm>
    </Edit>
  );
};

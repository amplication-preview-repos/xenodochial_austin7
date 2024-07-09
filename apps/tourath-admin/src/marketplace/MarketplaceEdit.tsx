import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const MarketplaceEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="productName" source="productName" />
        <TextInput label="description" multiline source="description" />
        <NumberInput label="price" source="price" />
        <NumberInput step={1} label="stock" source="stock" />
        <TextInput label="category" source="category" />
        <NumberInput label="discount" source="discount" />
      </SimpleForm>
    </Edit>
  );
};

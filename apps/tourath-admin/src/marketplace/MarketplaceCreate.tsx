import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const MarketplaceCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="productName" source="productName" />
        <TextInput label="description" multiline source="description" />
        <NumberInput label="price" source="price" />
        <NumberInput step={1} label="stock" source="stock" />
        <TextInput label="category" source="category" />
        <NumberInput label="discount" source="discount" />
      </SimpleForm>
    </Create>
  );
};

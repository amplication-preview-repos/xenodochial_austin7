import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const MarketplaceShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="productName" source="productName" />
        <TextField label="description" source="description" />
        <TextField label="price" source="price" />
        <TextField label="stock" source="stock" />
        <TextField label="category" source="category" />
        <TextField label="discount" source="discount" />
      </SimpleShowLayout>
    </Show>
  );
};

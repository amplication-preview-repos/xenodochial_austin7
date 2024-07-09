import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const MarketplaceList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Marketplaces"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="productName" source="productName" />
        <TextField label="description" source="description" />
        <TextField label="price" source="price" />
        <TextField label="stock" source="stock" />
        <TextField label="category" source="category" />
        <TextField label="discount" source="discount" />
      </Datagrid>
    </List>
  );
};

import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  BooleanField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const TourathNativeExperiencesList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Tourath Native ExperiencesItems"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};

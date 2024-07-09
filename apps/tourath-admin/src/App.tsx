import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { TourathNativeExperiencesList } from "./tourathNativeExperiences/TourathNativeExperiencesList";
import { TourathNativeExperiencesCreate } from "./tourathNativeExperiences/TourathNativeExperiencesCreate";
import { TourathNativeExperiencesEdit } from "./tourathNativeExperiences/TourathNativeExperiencesEdit";
import { TourathNativeExperiencesShow } from "./tourathNativeExperiences/TourathNativeExperiencesShow";
import { ProductList } from "./product/ProductList";
import { ProductCreate } from "./product/ProductCreate";
import { ProductEdit } from "./product/ProductEdit";
import { ProductShow } from "./product/ProductShow";
import { BookingList } from "./booking/BookingList";
import { BookingCreate } from "./booking/BookingCreate";
import { BookingEdit } from "./booking/BookingEdit";
import { BookingShow } from "./booking/BookingShow";
import { EnkiduList } from "./enkidu/EnkiduList";
import { EnkiduCreate } from "./enkidu/EnkiduCreate";
import { EnkiduEdit } from "./enkidu/EnkiduEdit";
import { EnkiduShow } from "./enkidu/EnkiduShow";
import { MarketplaceList } from "./marketplace/MarketplaceList";
import { MarketplaceCreate } from "./marketplace/MarketplaceCreate";
import { MarketplaceEdit } from "./marketplace/MarketplaceEdit";
import { MarketplaceShow } from "./marketplace/MarketplaceShow";
import { InventoryList } from "./inventory/InventoryList";
import { InventoryCreate } from "./inventory/InventoryCreate";
import { InventoryEdit } from "./inventory/InventoryEdit";
import { InventoryShow } from "./inventory/InventoryShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"Tourath"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="TourathNativeExperiences"
          list={TourathNativeExperiencesList}
          edit={TourathNativeExperiencesEdit}
          create={TourathNativeExperiencesCreate}
          show={TourathNativeExperiencesShow}
        />
        <Resource
          name="Product"
          list={ProductList}
          edit={ProductEdit}
          create={ProductCreate}
          show={ProductShow}
        />
        <Resource
          name="Booking"
          list={BookingList}
          edit={BookingEdit}
          create={BookingCreate}
          show={BookingShow}
        />
        <Resource
          name="Enkidu"
          list={EnkiduList}
          edit={EnkiduEdit}
          create={EnkiduCreate}
          show={EnkiduShow}
        />
        <Resource
          name="Marketplace"
          list={MarketplaceList}
          edit={MarketplaceEdit}
          create={MarketplaceCreate}
          show={MarketplaceShow}
        />
        <Resource
          name="Inventory"
          list={InventoryList}
          edit={InventoryEdit}
          create={InventoryCreate}
          show={InventoryShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;

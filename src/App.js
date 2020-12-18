import React from "react";
import { Admin, Resource, EditGuesser } from "react-admin";
import { DataProvider, AuthClient } from "./providers";
import { UserList, UserEdit, UserCreate } from "./components/users";
import { ComercialiadorasList } from "./components/comercializadoras";
import { PedidosList } from "./components/pedidos";
import { PedidosColectivosList } from "./components/pedidos-colectivos";
import { ProductosList } from "./components/productos";
import { ClientesList } from "./components/clientes";

import Login from "./components/MyLoginPage";

import PeopleIcon from "@material-ui/icons/People";
import StorefrontIcon from '@material-ui/icons/Storefront';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import PaymentIcon from '@material-ui/icons/Payment';
import GroupWorkIcon from '@material-ui/icons/GroupWork';

import { Dashboard } from "./components/Dashboard";
import { spanishI18nProvider } from "./i18nProviders/spanish";
import "./customStyle.css"

const App = () => (
  <Admin
    dashboard={Dashboard}
    dataProvider={DataProvider}
    authProvider={AuthClient}
    loginPage={Login}
    i18nProvider={spanishI18nProvider}
  >
    <Resource
      name="usuarios"
      list={UserList}
      edit={UserEdit}
      create={UserCreate}
      icon={PeopleIcon}
      options={{ label: "Administradores" }}
    />
    <Resource
      name="clientes"
      list={ClientesList}
      edit={EditGuesser}
      icon={AssignmentIndIcon}
      options={{ label: "Clientes" }}
    />
    <Resource
      name="vendedores"
      list={ComercialiadorasList}
      edit={EditGuesser}
      icon={StorefrontIcon}
      options={{ label: "Comercializadoras" }}
    />
    <Resource
      name="productos"
      list={ProductosList}
      edit={EditGuesser}
      icon={LocalMallIcon}
      options={{ label: "Productos" }}
    />
    <Resource
      name="pedidos"
      list={PedidosList}
      edit={EditGuesser}
      icon={PaymentIcon}
      options={{ label: "Pedidos" }}
    />
    <Resource
      name="pedidos-colectivos"
      list={PedidosColectivosList}
      edit={EditGuesser}
      icon={GroupWorkIcon}
      options={{ label: "Pedidos colectivos" }}
    />

  </Admin>
);

export default App;

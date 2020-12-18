import React from "react";
import {
  List,
  Datagrid,
  TextField,
  UrlField,
  NumberField,
  Filter,
  SearchInput
} from "react-admin";

// import { DatosInstitucionalTab } from "./DatosInstitucionalTab"
// import { DatosSedeSocialTab } from "./DatosSedeSocialTab"
// import { DatosCuentasTab } from "./DatosCuentasTab"
// import { DatosSociosTab } from "./DatosSociosTab"
// import { DatosBalancesTab } from "./DatosBalancesTab"
// import { DatosActasConsejoTab } from "./DatosActasConsejoTab"
// import { DatosActasAsambleaTab } from "./DatosActasAsambleaTab"
// import { DatosInformesSindicoTab } from "./DatosInformesSindicoTab"


const FilterOptions = (props) => (
    <Filter {...props}>
      <SearchInput source="searchnombre_vendedor" placeholder="Nombre" alwaysOn />
    </Filter>
);

export const ComercialiadorasList = (props) => (
  <List title="Cooperativas" filters={<FilterOptions />} {...props}>
    <Datagrid rowClick="edit">
      <TextField label="Nombre" source="nombre_vendedor" />
      <TextField label="slug" source="nombre_corto_vendedor" />
      <UrlField label="Url" source="url" />
      <NumberField label="V. Carrito" source="tiempo_vencimiento_pedidos" />
      <TextField label="Visible" source="visible_en_multicatalogo.data" />
      <TextField label="Ventas habilitadas" source="ventas_habilitadas.data" />
    </Datagrid>
  </List>
);

// export const CooperativaEdit = (props) => (
//   <Edit title="Editar cooperativa" {...props}>
//     <TabbedForm>
//       {DatosInstitucionalTab()}
//       {DatosSedeSocialTab()}
//       {DatosCuentasTab()}
//       {DatosSociosTab()}
//       {DatosActasConsejoTab()}
//       {DatosActasAsambleaTab()}
//       {DatosBalancesTab()}
//       {DatosInformesSindicoTab()}
//     </TabbedForm>
//   </Edit>
// );
//
// export const CooperativaCreate = (props) => (
//   <Create title="Crear cooperativa" {...props}>
//     <TabbedForm>
//       {DatosInstitucionalTab()}
//       {DatosSedeSocialTab()}
//       {DatosCuentasTab()}
//     </TabbedForm>
//   </Create>
// );

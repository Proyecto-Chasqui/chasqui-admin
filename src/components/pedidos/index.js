import React from "react";
import {
  List,
  Datagrid,
  TextField,
  NumberField,
  ReferenceField,
  DateField,
  FunctionField,
  SelectInput,
  ReferenceInput,
  Filter,
  AutocompleteInput,
} from "react-admin";

// import { DatosInstitucionalTab } from "./DatosInstitucionalTab"
// import { DatosSedeSocialTab } from "./DatosSedeSocialTab"
// import { DatosCuentasTab } from "./DatosCuentasTab"
// import { DatosSociosTab } from "./DatosSociosTab"
// import { DatosBalancesTab } from "./DatosBalancesTab"
// import { DatosActasConsejoTab } from "./DatosActasConsejoTab"
// import { DatosActasAsambleaTab } from "./DatosActasAsambleaTab"
// import { DatosInformesSindicoTab } from "./DatosInformesSindicoTab"

const estados = [
  { id: 'abierto', name: 'Abierto' },
  { id: 'preparado', name: 'Preparado' },
  { id: 'confirmado', name: 'Confirmado' },
  { id: 'cancelado', name: 'Cancelado' },
]

const PedidosFilter = (props) => (
    <Filter {...props}>
      <ReferenceInput
        label="Nombre del cliente"
        source="cliente"
        reference="clientes"
        filterToQuery={searchText => ({ 'nombre[$like]': `%${searchText}%` })}
        sort={{ field: 'nombre', order: 'ASC' }}
        alwaysOn
      >
          <AutocompleteInput optionText={choice => { return choice.nombre !== undefined && `${choice.nombre}, ${choice.apellido} (${choice.id})`}} />
      </ReferenceInput>
      <SelectInput label="Estado" source="estado" choices={estados} alwaysOn />
      <ReferenceInput label="Comercializadora" source="id_vendedor" reference="vendedores" fullWidth alwaysOn>
        <SelectInput optionText="nombre_vendedor" />
      </ReferenceInput>
    </Filter>
);

export const PedidosList = props => (
    <List
      filters={<PedidosFilter />}
      sort={{ field: 'fecha_creacion', order: 'DESC' }}
      {...props}
    >
        <Datagrid rowClick="edit">
            <TextField source="estado" />
            <DateField label="Creado" source="fecha_creacion" />
            <NumberField
              label="Monto actual" source="monto_actual"
              options={{ style: 'currency', currency: 'ARS' }}
            />
            <ReferenceField label="Pedido colectivo" source="id_pedido_colectivo" reference="pedidos-colectivos">
                <FunctionField label="Name" render={record => `${record.id} - ${record.estado}`} />
            </ReferenceField>
            <ReferenceField label="Cliente" source="cliente" reference="clientes">
                <FunctionField label="Name" render={record => `${record.nombre} ${record.apellido}`} />
            </ReferenceField>
            <TextField label="Comercializadora" source="nombre_vendedor" />
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

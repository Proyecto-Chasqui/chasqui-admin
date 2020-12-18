import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  Filter,
  SearchInput
} from 'react-admin';

const ClientesFilter = (props) => (
    <Filter {...props}>
      <SearchInput source="searchnombre" placeholder="Nombre" alwaysOn />
      <SearchInput source="searchapellido" placeholder="Nombre" alwaysOn />
    </Filter>
);

export const ClientesList = props => (
  <List title="Usuarios" filters={<ClientesFilter />} {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="nombre" />
      <TextField source="apellido" />
      <TextField source="telefono_fijo" />
      <TextField source="telefono_movil" />
      <TextField source="estado" />
    </Datagrid>
  </List>
);

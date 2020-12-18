import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  EmailField,
  SimpleForm,
  Edit,
  TextInput,
  SelectInput,
  Create,
  ReferenceField,
  ReferenceInput,
} from 'react-admin';

const roles = [
  { id: 'admin', name: 'admin' },
  { id: 'vendedor', name: 'vendedor' },
  { id: 'operador', name: 'operador' }
]

export const UserList = props => (
  <List title="Usuarios" {...props}>
    <Datagrid rowClick="edit">
      <TextField label="Nombre" source="username" />
      <EmailField label="Email" source="email" />
      <TextField source="role"/>
      <ReferenceField label="Comercializadora" source="vendedorid" reference="vendedores">
          <TextField source="nombre_vendedor" />
      </ReferenceField>
    </Datagrid>
  </List>
);

export const UserEdit = props => (
  <Edit title="Editar usuario" {...props}>
    <SimpleForm>
      <TextInput label="Nombre" source="username" type="text"/>
      <TextInput label="Email" source="email" type="email"/>
      <SelectInput label="Rol" source="role" choices={roles} />
      <ReferenceInput label="Comercalizadora" source="vendedorid" reference="vendedores">
        <SelectInput optionText="nombre_vendedor" />
      </ReferenceInput>
      <TextInput label="Password" source="password" type="password"/>
    </SimpleForm>
  </Edit>
);

export const UserCreate = props => (
  <Create title="Crear usuario" {...props}>
    <SimpleForm>
      <TextInput label="Nombre" source="username" type="text"/>
      <TextInput label="Email" source="email" type="email"/>
      <SelectInput label="Rol" source="role" choices={roles} />
      <ReferenceInput label="Comercalizadora" source="vendedorid" reference="vendedores">
        <SelectInput optionText="nombre_vendedor" />
      </ReferenceInput>
      <TextInput label="Password" source="password" type="password"/>
    </SimpleForm>
  </Create>
);

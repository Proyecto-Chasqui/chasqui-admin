import React from "react";
import {
  List,
  Datagrid,
  TextField,
  NumberField,
  SearchInput,
  Filter,
  ArrayField,
  SingleFieldList,
  BooleanField,
  ChipField,
} from "react-admin";

const ProductosFilter = (props) => (
    <Filter {...props}>
        <SearchInput placeholder="Nombre" source="searchnombre" alwaysOn />
    </Filter>
);

export const ProductosList = props => (
    <List
      filters={<ProductosFilter />}
      sort={{ field: 'nombre', order: 'ASC' }}
      {...props}
    >
        <Datagrid rowClick="edit">
          <TextField source="id" />
          <TextField label="Nombre" source="nombre" />
          <NumberField label="Productor" source="id_productor" />
          <BooleanField label="Oculto" source="ocultado" />

          <TextField label="Categoría" source="CATEGORIum.nombre" />

          <ArrayField label="Características" source="CARACTERISTICAs">
            <SingleFieldList>
              <ChipField source="nombre" />
            </SingleFieldList>
          </ArrayField>

          <ArrayField label="Variante" source="VARIANTEs">
            <Datagrid>
              <TextField source="nombre" />
              <NumberField source="stock" />
              <NumberField source="reservados" />
              <NumberField source="precio" />
              <TextField source="codigo" />
              <BooleanField source="destacado" />
            </Datagrid>
          </ArrayField>
        </Datagrid>
    </List>
);

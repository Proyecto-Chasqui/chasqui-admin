import React from "react";
import {
  List,
  Datagrid,
  TextField,
  NumberField,
  DateField,
  SelectInput,
  Filter,
  ArrayField,
  SingleFieldList
} from "react-admin";

const estados = [
  { id: 'abierto', name: 'Abierto' },
  { id: 'preparado', name: 'Preparado' },
  { id: 'confirmado', name: 'Confirmado' },
  { id: 'cancelado', name: 'Cancelado' },
]

const PedidosColectivosFilter = (props) => (
    <Filter {...props}>
        <SelectInput label="Estado" source="estado" choices={estados} alwaysOn />
    </Filter>
);

export const PedidosColectivosList = props => (
    <List
      filters={<PedidosColectivosFilter />}
      sort={{ field: 'fecha_creacion', order: 'DESC' }}
      {...props}
    >
        <Datagrid rowClick="edit">
          <TextField label="Estado" source="estado" />
          <DateField label="Fecha" source="fecha_creacion" />
          <TextField label="Comentarios" source="comentario" />

          <ArrayField label="Pedidos" source="PEDIDOs">
            <SingleFieldList>
              <NumberField
                label="Monto actual" source="monto_actual"
                options={{ style: 'currency', currency: 'ARS' }}
              />
            </SingleFieldList>
          </ArrayField>
        </Datagrid>
    </List>
);

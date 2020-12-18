import React from "react";
import {
    FormTab,
    ReferenceManyField,
    TextField,
    EditButton,
    Datagrid,
    Link,
    Button,
    DateField,
    ArrayField,
    SingleFieldList,
    ChipField
} from "react-admin";
import { PostPanel } from '../utils';

const AddButton = ({ record }) => (
  <Button
    component={Link}
    to={{
      pathname: "/actas-consejo/create",
      state: { cooperativa: record._id },
    }}
    label="Agregar acta de consejo"
  >
  </Button>
);

export const DatosActasConsejoTab = (props) => {
    return (
        <FormTab className="tab-title" label="Actas del consejo">
          <ReferenceManyField
            addLabel={false}
            reference="actas-consejo"
            target="cooperativa"
            sort={{ field: "created_at", order: "DESC" }}
          >
            <Datagrid expand={<PostPanel />}>
              <TextField label="Número de acta" source="numeroDeActa" />
              <DateField label="Inicio" source="fechaInicio" fullWidth />
              <DateField label="Fin" source="fechaFin" fullWidth />
              <ArrayField source="ordenDelDia">
                <SingleFieldList>
                  <ChipField source="tema" />
                </SingleFieldList>
              </ArrayField>
              <EditButton />
            </Datagrid>
          </ReferenceManyField>
          <AddButton {...props} />
        </FormTab >
    );
}

export default DatosActasConsejoTab;

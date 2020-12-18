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
    BooleanField,
    ArrayField,
    SingleFieldList,
    ChipField
} from "react-admin";
import { PostPanel } from '../utils';

const AddButton = ({ record }) => (
  <Button
    component={Link}
    to={{
      pathname: "/actas-asamblea/create",
      state: { cooperativa: record._id },
    }}
    label="Agregar acta de asamblea"
  >
  </Button>
);

export const DatosActasAsambleaTab = (props) => {
    return (
        <FormTab className="tab-title" label="Actas de asamblea">
          <ReferenceManyField
            addLabel={false}
            reference="actas-asamblea"
            target="cooperativa"
            sort={{ field: "created_at", order: "DESC" }}
          >
            <Datagrid expand={<PostPanel />}>
              <TextField label="Número de acta" source="numeroDeActa" />
              <DateField label="Inicio" source="fechaInicio" fullWidth />
              <DateField label="Fin" source="fechaFin" fullWidth />
              <BooleanField source="asambleaExtraordinaria" />
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

export default DatosActasAsambleaTab;

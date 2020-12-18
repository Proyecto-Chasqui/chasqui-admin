import React from "react";
import {
    FormTab,
    ReferenceManyField,
    TextField,
    EditButton,
    Datagrid,
    Link,
    Button
} from "react-admin";

const AddLicenciaButton = ({ record }) => (
  <Button
    component={Link}
    to={{
      pathname: "/socio/create",
      state: { cooperativa: record._id },
    }}
    label="Agregar socio"
  >
  </Button>
);

export const DatosSociosTab = (props) => {
    return (
        <FormTab className="tab-title" label="Socios">
          <ReferenceManyField
            addLabel={false}
            reference="socio"
            target="cooperativa"
            sort={{ field: "created_at", order: "DESC" }}
          >
            <Datagrid>
              <TextField label="Nombre/s" source="nombre" />
              <TextField label="Apellido" source="apellido" />
              <TextField label="Localidad" source="direccion.localidad" />
              <TextField label="Provincia" source="direccion.provincia" />
              <TextField label="Cargo" source="cargo" />
              <TextField label="Puesto" source="puesto" />
              <EditButton />
            </Datagrid>
          </ReferenceManyField>
          <AddLicenciaButton {...props} />
        </FormTab >
    );
}

export default DatosSociosTab;

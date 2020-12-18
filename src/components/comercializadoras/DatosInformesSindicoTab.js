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
    NumberField
} from "react-admin";

const AddButton = ({ record }) => (
  <Button
    component={Link}
    to={{
      pathname: "/informes-sindico/create",
      state: { cooperativa: record._id },
    }}
    label="Agregar informe del síndico"
  >
  </Button>
);

const PostPanel = ({ id, record, resource }) => (
    <div dangerouslySetInnerHTML={{ __html: record.informe }} />
);

export const DatosInformesSindicoTab = (props) => {
    return (
        <FormTab className="tab-title" label="Sindicatura">
          <ReferenceManyField
            addLabel={false}
            reference="informes-sindico"
            target="cooperativa"
            sort={{ field: "created_at", order: "DESC" }}
          >
            <Datagrid expand={<PostPanel />}>
              <TextField label="Número de acta" source="numeroDeInforme" />
              <NumberField label="Ejercicio" source="ejercicio" />
              <DateField label="Fecha" source="fecha" />
              <TextField label="Autor" source="autor" />
              <EditButton />
            </Datagrid>
          </ReferenceManyField>
          <AddButton {...props} />
        </FormTab >
    );
}

export default DatosInformesSindicoTab;

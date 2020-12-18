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

const AddButton = ({ record }) => (
  <Button
    component={Link}
    to={{
      pathname: "/balances-sociales/create",
      state: { cooperativa: record._id },
    }}
    label="Agregar balance"
  >
  </Button>
);

const PostPanel = ({ id, record, resource }) => (
    <div dangerouslySetInnerHTML={{ __html: record.introduccion }} />
);

export const DatosBalancesTab = (props) => {
    return (
        <FormTab className="tab-title" label="Balance social">
          <ReferenceManyField
            addLabel={false}
            reference="balances-sociales"
            target="cooperativa"
            sort={{ field: "created_at", order: "DESC" }}
          >
            <Datagrid expand={<PostPanel />}>
              <TextField label="Número de ejercicio" source="numeroDeEjercicio" />
              <TextField label="Autor" source="autor" />
              <EditButton />
            </Datagrid>
          </ReferenceManyField>
          <AddButton {...props} />
        </FormTab >
    );
}

export default DatosBalancesTab;

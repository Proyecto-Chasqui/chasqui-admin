import React from "react";
import {
    TextInput,
    DateInput,
    FormTab,
} from "react-admin";
import {Grid, Typography} from "@material-ui/core";

export const DatosInstitucionalTab = () => {
    return (
        <FormTab className="tab-title" label="Institucional">
          <Grid container spacing={3} fullWidth={true}>
            <Grid item xs={12}>
              <Typography variant="h6" gutterBottom>Información Institucional</Typography>
            </Grid>
            <Grid item xs={12} sm={12} lg={6}>
              <TextInput label="Razón social" source="razonSocial" fullWidth />
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
              <TextInput label="CUIT" source="cuit" fullWidth />
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
              <DateInput label="Fecha de inicio de actividades" source="inicioActividades" fullWidth />
            </Grid>
            <Grid item xs={12} sm={6} md={9}>
              <TextInput multiline rows={10} label="Objeto social" source="objetoSocial" fullWidth />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <TextInput label="Número de matrícula" source="nroMatricula" fullWidth />
              <DateInput label="Fecha de matrícula" source="fechaMatricula" fullWidth />
            </Grid>
          </Grid>

        </FormTab >
    );
}

export default DatosInstitucionalTab;

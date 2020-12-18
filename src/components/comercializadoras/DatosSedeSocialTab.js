import React from "react";
import {
    TextInput,
    FormTab,
} from "react-admin";
import {Grid, Typography} from "@material-ui/core";

export const DatosSedeSocialTab = () => {
    return (
        <FormTab className="tab-title" label="Sede social">
          <Grid container spacing={3} fullWidth={true}>
            <Grid item xs={12}>
              <Typography variant="h6" gutterBottom>Sede social</Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
              <TextInput label="Dirección de sede" source="sede.calle" fullWidth />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <TextInput label="Provincia" source="sede.provincia" fullWidth />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <TextInput label="Localidad" source="sede.localidad" fullWidth />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <TextInput label="Código postal" source="sede.codigoPostal" fullWidth />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <TextInput label="Teléfono" source="sede.telefono" fullWidth />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <TextInput label="Correo electrónico" source="sede.email" fullWidth />
            </Grid>
          </Grid>

        </FormTab >
    );
}

export default DatosSedeSocialTab;

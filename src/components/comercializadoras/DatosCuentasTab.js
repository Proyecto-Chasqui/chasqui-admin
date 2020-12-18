import React from "react";
import {
    TextInput,
    FormTab,
    SelectInput,
    ArrayInput,
    SimpleFormIterator,
    NumberInput,
    FormDataConsumer
} from "react-admin";
import {Grid, Typography} from "@material-ui/core";

const tiposDeCuentas = [
    { id: 'cas', name: 'Caja de Ahorro en pesos' },
    { id: 'cad', name: 'Caja de Ahorro en dólares' },
    { id: 'ccs', name: 'Cuenta corriente en pesos' },
    { id: 'ccd', name: 'Cuenta corriente en dólares' },
];

export const DatosCuentasTab = () => {
    return (
        <FormTab className="tab-title" label="Cuentas">
          <Grid container spacing={3} fullWidth={true}>
            <Grid item xs={12}>
              <Typography variant="h6" gutterBottom>Cuentas bancarias</Typography>
            </Grid>

            <Grid item md={12}>
              <ArrayInput source="cuentas" label="">
                <SimpleFormIterator>
                  <FormDataConsumer>
                      {({ getSource, scopedFormData }) => {
                          return (
                            <Grid container spacing={3} fullWidth={true}>
                              <Grid item xs={12}>
                                <TextInput label="Título" source={getSource('titulo')} record={scopedFormData} fullWidth />
                              </Grid>
                              <Grid item xs={12}>
                                <Typography variant="h6" gutterBottom>Institución</Typography>
                              </Grid>
                              <Grid item xs={9}>
                                <TextInput label="Institución" source={getSource('institucion')} record={scopedFormData} fullWidth />
                              </Grid>
                              <Grid item xs={3}>
                                <NumberInput label="Numero de sucursal" source={getSource('numeroDeSucursal')} record={scopedFormData} fullWidth />
                              </Grid>
                              <Grid item xs={12}>
                                <Typography variant="h6" gutterBottom>Datos de la cuenta</Typography>
                              </Grid>
                              <Grid item xs={4}>
                                <SelectInput label="Tipo de cuenta" source={getSource('tipoDeCuenta')} record={scopedFormData} choices={tiposDeCuentas} fullWidth />
                              </Grid>
                              <Grid item xs={4}>
                                <NumberInput label="Numero de cuenta" source={getSource('numeroDeCuenta')} record={scopedFormData} fullWidth />
                              </Grid>
                              <Grid item xs={4}>
                                <NumberInput label="CBU" source="cbu" />
                              </Grid>
                              <Grid item xs={12}>
                                <Typography variant="h6" gutterBottom>Domicilio</Typography>
                              </Grid>
                              <Grid item xs={8}>
                                <TextInput label="Calle" source={getSource('domicilio.calle')} record={scopedFormData} fullWidth />
                              </Grid>
                              <Grid item xs={4}>
                                <TextInput label="Código postal" source={getSource('domicilio.codigoPostal')} record={scopedFormData} fullWidth />
                              </Grid>
                              <Grid item xs={3}>
                                <TextInput label="Provincia" source={getSource('domicilio.provincia')} record={scopedFormData} fullWidth />
                              </Grid>
                              <Grid item xs={3}>
                                <TextInput label="Localidad" source={getSource('domicilio.localidad')} record={scopedFormData} fullWidth />
                              </Grid>
                              <Grid item xs={3}>
                                <TextInput label="Teléfono" source={getSource('domicilio.telefono')} record={scopedFormData} fullWidth />
                              </Grid>
                              <Grid item xs={3}>
                                <TextInput label="Email" source={getSource('domicilio.email')} record={scopedFormData} fullWidth />
                              </Grid>
                            </Grid>
                          );
                      }}
                  </FormDataConsumer>

                </SimpleFormIterator>
              </ArrayInput>
            </Grid>
          </Grid>

        </FormTab >
    );
}

export default DatosCuentasTab;

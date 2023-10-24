//importaciones de proyectos con TS 
import React, { FC, ReactElement } from 'react';
import { Grid } from '@mui/material'

export const Dashboard: FC = (): ReactElement => {
    return (
        <Grid container minHeight="100vh" p={0} m={0}>
            <Grid item md={8} px={4}>
                <h2>Content Area</h2>
            </Grid>
            <Grid item md={4} sx={{
                backgroundColor: 'background.paper',
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
                alignItems: 'center',
                width: '100%'
            }}>
                <h2>sidebar </h2>

            </Grid>
        </Grid>
    )
}

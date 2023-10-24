import React, { FC, ReactElement } from 'react';
import { Grid } from '@mui/material'

export const Sidebar: FC = (): ReactElement => {

    return (
        <Grid item
            md={4}
            sx={{
                backgroundColor: 'background.paper',
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
                alignItems: 'center',
                width: '100%'
            }}>
            <h2>sidebar </h2>
        </Grid>
    )
}

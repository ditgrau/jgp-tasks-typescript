import React, { FC, ReactElement } from 'react';
import { Grid } from '@mui/material'
import { Profile } from './Profile';
import { CreateTaskForm } from './CreateTaskForm';

export const Sidebar: FC = (): ReactElement => {

    return (
        <Grid item p={4}
            md={4}
            sx={{
                backgroundColor: 'background.paper',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: '100%'
            }}>
            <Profile name='Cande'></Profile>
            <CreateTaskForm/>
        </Grid>
    )
}

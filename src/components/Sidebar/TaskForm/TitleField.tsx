import React, { FC, ReactElement } from 'react';
import { TextField } from '@mui/material'

export const TitleField: FC = (): ReactElement => {
    return (
        <>
            <TextField id="title"
                name="title"
                label="Task Title"
                placeholder="Task Title"
                variant="outlined"
                size="small"
                fullWidth 
                />
        </>
    )
}
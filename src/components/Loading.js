import React from 'react'
import { ThemeProvider } from '@mui/material/styles';
import { CircularProgress } from '@mui/material';

function Loading({ theme }) {
  return (
    <div className='capture-form h-screen flex items-center justify-center'>
        <ThemeProvider theme={theme}>
            <CircularProgress 
                color="primary"
            />
        </ThemeProvider>
    </div>
  )
}

export default Loading
import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function CaptureForm({ cancelForm }) {

    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Email: ${email}, First Name: ${firstName}, Last Name: ${lastName}`);
    };

    const theme = createTheme({
        palette: {
            primary: {
                main: '#000000',
            },
            secondary: {
                main: '#FFFFFF',
            },
            text: {
                primary: '#000000',
                secondary: '#666666',
            },
        },
      });

    return (
        <div className='capture-form h-screen z-40 flex items-center justify-center'>
            <form onSubmit={handleSubmit} className='flex flex-col gap-2'>
                <ThemeProvider theme={theme}>
                    <TextField
                        label="Email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        fullWidth
                        margin="normal"
                        color="primary"
                    />
                    <TextField
                        label="First Name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        fullWidth
                        margin="normal"
                        color="primary"
                    />
                    <TextField
                        label="Last Name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        fullWidth
                        margin="normal"
                        color="primary"
                    />
                    <Button variant="contained" color="primary" type="submit">
                        Submit
                    </Button>
                    <Button variant="contained" color="secondary" style={{ color: 'black' }} onClick={cancelForm}>
                        Back
                    </Button>
                </ThemeProvider>
            </form>
        </div>
    )
}

export default CaptureForm
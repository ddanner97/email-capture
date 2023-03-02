import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { createBin } from '../utils';

function CaptureForm({ cancelForm, redirectForm, viewLoading, theme }) {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        const data = { 
            fullName: `${firstName} ${lastName}`,
            email: email 
        }

        console.log(data);
        viewLoading();
        createBin(data).then(redirectForm)
    };

    return (
        <div className='capture-form h-screen z-40 flex items-center justify-center'>
            <form onSubmit={handleSubmit} className='flex flex-col gap-2'>
                <ThemeProvider theme={theme}>
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
                    <TextField
                        label="Email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
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
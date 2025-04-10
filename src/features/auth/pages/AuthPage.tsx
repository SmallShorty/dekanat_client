import React, { useState } from 'react';
import {
    Box,
    CssBaseline,
    Paper,
    Tabs,
    Tab,
    Typography,
    Stack,
} from '@mui/material';
import LoginForm from "../components/LoginForm.tsx";
import RegisterForm from "../components/RegisterForm.tsx";

export default function AuthPage() {
    const [tabIndex, setTabIndex] = useState(0);

    const handleTabChange = (_: React.SyntheticEvent, newValue: number) => {
        setTabIndex(newValue);
    };

    return (
        <>
            <CssBaseline />
            <Stack
                minHeight="100vh"
                alignItems="center"
                justifyContent="center"
                sx={{
                    background: theme =>
                        theme.palette.mode === 'dark'
                            ? 'linear-gradient(to right, #141e30, #243b55)'
                            : 'linear-gradient(to right, #e0eafc, #cfdef3)',
                }}
            >
                <Paper elevation={3} sx={{ width: 400, p: 4 }}>
                    <Typography variant="h4" textAlign="center" mb={2}>
                        Welcome
                    </Typography>
                    <Tabs value={tabIndex} onChange={handleTabChange} centered>
                        <Tab label="Login" />
                        <Tab label="Register" />
                    </Tabs>
                    <Box mt={3}>
                        {tabIndex === 0 ? <LoginForm /> : <RegisterForm />}
                    </Box>
                </Paper>
            </Stack>
        </>
    );
}

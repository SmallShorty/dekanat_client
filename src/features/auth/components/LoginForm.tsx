import {
    Box,
    Button,
    TextField,
    FormControl,
    FormLabel,
} from '@mui/material';
import React, { useState } from 'react';
import { login } from '../authSlice.ts';
import {useAppDispatch} from "../../../hooks/useAppDispatch.ts"; // Импортируем login thunk

export default function LoginForm() {
    const dispatch = useAppDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        dispatch(login({ email, password }));
    };

    return (
        <Box
            component="form"
            onSubmit={handleSubmit}
            display="flex"
            flexDirection="column"
            gap={2}
            sx={{ width: 300 }}
        >
            <FormControl>
                <FormLabel>Email</FormLabel>
                <TextField
                    name="email"
                    required
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    fullWidth
                />
            </FormControl>
            <FormControl>
                <FormLabel>Password</FormLabel>
                <TextField
                    name="password"
                    required
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    fullWidth
                />
            </FormControl>
                <Button variant="contained" type="submit" sx={{ marginTop: 2 }}>
                    Login
                </Button>
        </Box>
    );
}

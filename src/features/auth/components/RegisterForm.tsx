
import { register } from '../authSlice';
import { Box, Button, TextField, FormControl, FormLabel } from '@mui/material';
import React, { useState } from 'react';
import {useAppDispatch} from "../../../hooks/useAppDispatch.ts";

export default function RegisterForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useAppDispatch();

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            // Используем unwrap() для получения ответа от асинхронного действия
            const result = await dispatch(register({ email, password })).unwrap();
            console.log('Регистрация успешна:', result);
        } catch (error) {
            console.error('Ошибка регистрации:', error);
        }
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
                />
            </FormControl>
            <Button variant="contained" type="submit">
                Sign Up
            </Button>
        </Box>
    );
}

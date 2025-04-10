import {
    Button,
    TextField,
    FormControl,
    FormLabel,
} from '@mui/material';
import React, { useState } from 'react';
import { login } from '../authSlice.ts';
import {useAppDispatch} from "../../../hooks/useAppDispatch.ts";
import {useNavigate} from "react-router-dom"; // Импортируем login thunk

export default function LoginForm() {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();


        const resultAction = await dispatch(login({email, password}));

        console.log('resultAction', resultAction);

        if (resultAction.meta.requestStatus === 'fulfilled') {
            navigate('/');
        }
    };

    return (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <FormControl>
                <FormLabel>Почта</FormLabel>
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
                <FormLabel>Пароль</FormLabel>
                <TextField
                    name="password"
                    required
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    fullWidth
                />
            </FormControl>
            <Button variant="contained" type="submit" sx={{ marginTop: 2, padding: 2 }}>
                Войти
            </Button>
        </form>
    );
}

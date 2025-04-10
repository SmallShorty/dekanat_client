import { register, login } from '../authSlice';
import { Button, TextField, FormControl, FormLabel } from '@mui/material';
import React, { useState } from 'react';
import { useAppDispatch } from "../../../hooks/useAppDispatch.ts";
import { useNavigate } from 'react-router-dom';

export default function RegisterForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useAppDispatch();
    const navigate = useNavigate();  // для перенаправления

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            const registerResult = await dispatch(register({ email, password })).unwrap();
            console.log('Регистрация успешна:', registerResult);

            const loginResult = await dispatch(login({ email, password })).unwrap();
            console.log('Логин успешен:', loginResult);

            navigate('/');
        } catch (error) {
            console.error('Ошибка при регистрации или логине:', error);
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
                Зарегистрироваться
            </Button>
        </form>
    );
}

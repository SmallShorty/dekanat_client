import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Link, useNavigate } from 'react-router-dom';
import { logoutApi } from "../../features/auth/authSlice.ts";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../hooks/useAppDispatch.ts";
import { useEffect } from "react";

export default function ButtonAppBar() {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const user = useSelector((state: any) => state.auth.user);

    useEffect(() => {
        console.log('nav', user);
    }, [user]);

    const handleLogout = async () => {
        try {
            await dispatch(logoutApi()).unwrap();
            navigate('/auth');
        } catch (error) {
            console.error('Ошибка выхода:', error);
        }
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ width: '100%' }}>
                <Toolbar>
                    {user ? (
                        <>
                            {/* Проверяем, что user.roles существует и является массивом */}
                            {Array.isArray(user?.roles) && user?.roles.includes('ADMIN') && (
                                <Button
                                    color="inherit"
                                    variant="outlined"
                                    component={Link}
                                    to="/admin"
                                    sx={{ marginLeft: 0 }}
                                >
                                    Панель администратора
                                </Button>
                            )}
                            <Button
                                color="inherit"
                                sx={{ marginLeft: 'auto' }}
                                onClick={handleLogout}
                            >
                                Выйти
                            </Button>
                        </>
                    ) : (
                        <Button
                            color="inherit"
                            sx={{ marginLeft: 'auto' }}
                            component={Link}
                            to="/auth"
                        >
                            Войти
                        </Button>
                    )}
                </Toolbar>
            </AppBar>
        </Box>
    );
}

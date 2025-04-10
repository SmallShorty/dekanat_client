import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

export default function ButtonAppBar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ width: '100%' }}> {/* Обеспечиваем ширину 100% */}
                <Toolbar>
                    <Button
                        color="inherit"
                        sx={{ marginLeft: 'auto' }}
                        component={Link}
                        to="/auth"
                    >
                        Войти
                    </Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

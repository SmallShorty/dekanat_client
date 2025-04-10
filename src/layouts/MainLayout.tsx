import { Outlet } from "react-router-dom";
import { Box, Container, useTheme } from "@mui/material";
import ButtonAppBar from "../components/common/ButtonAppBar.tsx";

const MainLayout = () => {
    const theme = useTheme();

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                minHeight: "100vh",
                background: theme.palette.mode === 'dark'
                    ? 'linear-gradient(to right, #141e30, #243b55)'
                    : 'linear-gradient(to right, #e0eafc, #cfdef3)',
            }}
        >
            <ButtonAppBar />
            <Container sx={{ mt: 4, flexGrow: 1 }}>
                <Outlet />
            </Container>
        </Box>
    );
};

export default MainLayout;

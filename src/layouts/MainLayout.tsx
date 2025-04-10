import { Outlet } from "react-router-dom";
import { Box, Container } from "@mui/material";
import ButtonAppBar from "../components/common/ButtonAppBar.tsx";

const MainLayout = () => {
    return (
        <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
            <ButtonAppBar />
            <Container sx={{ mt: 4, flexGrow: 1 }}>
                <Outlet />
            </Container>
        </Box>
    );
};

export default MainLayout;

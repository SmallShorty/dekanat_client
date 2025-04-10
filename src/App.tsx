import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import AuthLayout from "./layouts/AuthLayout.tsx";
import MainLayout from "./layouts/MainLayout.tsx";
import { CssBaseline } from "@mui/material";

const AuthPage = lazy(() => import("../src/features/auth/pages/AuthPage.tsx"));
const AdminPage = lazy(() => import("../src/features/admin/pages/AdminPage.tsx"));

function App() {

  return (
    <Suspense fallback={<div>Загрузка...</div>}>
        <CssBaseline />
        <Routes>
            <Route path="/" element={<MainLayout/>}>
                <Route path="/admin" element={<AdminPage/>} />
            </Route>
            <Route element={<AuthLayout />}>
                <Route path="/auth" element={<AuthPage/>} />
            </Route>
        </Routes>
    </Suspense>
  )
}

export default App

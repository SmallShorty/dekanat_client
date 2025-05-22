import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import AuthLayout from "./layouts/AuthLayout.tsx";
import MainLayout from "./layouts/MainLayout.tsx";
import { CssBaseline } from "@mui/material";
import ProtectedRoute from "./components/ProtectedRoute.tsx";
import StudentListPage from "./features/students/pages/StudentListPage.tsx";
import StudentFormPage from "./features/students/pages/StudentFormPage.tsx";
import InstituteListPage from "./features/institutes/pages/InstituteListPage.tsx";
import InstituteAdminPage from "./features/institutes/pages/InstituteAdminPage.tsx";

const AuthPage = lazy(() => import("../src/features/auth/pages/AuthPage.tsx"));
const AdminPage = lazy(() => import("../src/features/admin/pages/AdminPage.tsx"));

function App() {

    return (
        <Suspense fallback={<div>Загрузка...</div>}>
            <CssBaseline />
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route
                        path="/admin"
                        element={
                            <ProtectedRoute>
                                <AdminPage />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="/institutes"
                        element={
                                <InstituteListPage />
                        }
                    />
                    <Route
                        path="/institutes/create"
                        element={
                            <ProtectedRoute>
                                <InstituteAdminPage />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="/students"
                        element={
                                <StudentListPage />
                        }
                    />
                    <Route
                        path="/students/create"
                        element={
                                <StudentFormPage />
                        }
                    />
                    <Route
                        path="/students/:id"
                        element={
                                <StudentFormPage />
                        }
                    />
                </Route>
                <Route element={<AuthLayout />}>
                    <Route path="/auth" element={<AuthPage />} />
                </Route>
            </Routes>
        </Suspense>
    );
}

export default App;

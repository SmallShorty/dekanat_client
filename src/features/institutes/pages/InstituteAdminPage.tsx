// features/institutes/pages/InstituteAdminPage.tsx
import React, { useEffect, useState } from 'react';
import { fetchInstitutes } from '../instituteSlice';
import InstituteForm from '../components/InstituteForm';
import InstituteTable from '../components/InstituteTable';
import { Institute } from '../../../types/institute.ts';
import { useAppSelector } from '../../../hooks/useAppSelector.ts';
import { useAppDispatch } from '../../../hooks/useAppDispatch.ts';

import {
    Container,
    Typography,
    Grid,
    Paper,
    CircularProgress,
    Alert,
    Box,
} from '@mui/material';

const InstituteAdminPage: React.FC = () => {
    const dispatch = useAppDispatch();
    const { institutes, status, error } = useAppSelector((state) => state.institutes);
    const [editing, setEditing] = useState<Institute | undefined>(undefined);

    useEffect(() => {
        dispatch(fetchInstitutes());
    }, [dispatch]);

    const handleSuccess = () => {
        setEditing(undefined);
        dispatch(fetchInstitutes());
    };

    return (
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Typography variant="h4" component="h1" gutterBottom>
                Institute Management
            </Typography>

            {status === 'loading' && (
                <Box display="flex" justifyContent="center" my={4}>
                    <CircularProgress />
                </Box>
            )}

            {error && (
                <Alert severity="error" sx={{ mb: 2 }}>
                    {error}
                </Alert>
            )}

            <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                    <Paper elevation={3} sx={{ p: 3 }}>
                        <Typography variant="h6" gutterBottom>
                            {editing ? 'Edit Institute' : 'Add New Institute'}
                        </Typography>
                        <InstituteForm initialData={editing} onSuccess={handleSuccess} />
                    </Paper>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Paper elevation={3} sx={{ p: 3 }}>
                        <Typography variant="h6" gutterBottom>
                            Institutes List
                        </Typography>
                        <InstituteTable institutes={institutes} onEdit={setEditing} />
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
};

export default InstituteAdminPage;

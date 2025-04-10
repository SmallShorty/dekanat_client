import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../api/axios';
import { IUser } from '../../types/user';

interface LoginResponse {
    user: IUser;
    token: string; // Это JSESSIONID, который сервер возвращает в теле ответа
}

interface AuthState {
    user: IUser | null;
    token: string | null;
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

export const login = createAsyncThunk<LoginResponse, { email: string; password: string }>(
    'login',
    async (userData, { rejectWithValue }) => {
        try {
            const response = await api.post('/login', userData, {
                withCredentials: true,
            });
            return response.data;
        } catch (error: any) {
            return rejectWithValue(error.response?.data || error.message);
        }
    }
);

export const register = createAsyncThunk<LoginResponse, { email: string; password: string }>(
    'register',
    async (userData, { rejectWithValue }) => {
        try {
            const response = await api.post('/auth/register', userData, {
                withCredentials: true,
            });
            return response.data;
        } catch (error: any) {
            return rejectWithValue(error.response?.data || error.message);
        }
    }
);

const initialState: AuthState = {
    user: null,
    token: null,
    status: 'idle',
    error: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            state.user = null;
            state.token = null;

            localStorage.removeItem('token');
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(login.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.user = action.payload.user;
                state.token = action.payload.token;
            })
            .addCase(login.rejected, (state, action) => {
                state.status = 'failed';
                state.error = (action.payload as string) || 'Login failed';
            });

        builder
            .addCase(register.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(register.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.user = action.payload.user;
                state.token = action.payload.token;
                localStorage.setItem('token', action.payload.token);
            })
            .addCase(register.rejected, (state, action) => {
                state.status = 'failed';
                state.error = (action.payload as string) || 'Registration failed';
            });
    },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;

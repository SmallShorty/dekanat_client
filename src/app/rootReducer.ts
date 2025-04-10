import { combineReducers } from 'redux';
import authReducer from '../features/auth/authSlice';
import adminReducer from '../features/admin/adminSlice';

const rootReducer = combineReducers({
    auth: authReducer,
    admin: adminReducer
});

export default rootReducer;

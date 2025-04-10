import { combineReducers } from 'redux';
import authReducer from '../features/auth/authSlice';

const rootReducer = combineReducers({
    auth: authReducer
    // admin: adminReducer,
});

export default rootReducer;

import { combineReducers } from 'redux';
import authReducer from '../features/auth/authSlice';
import adminReducer from '../features/admin/adminSlice';
import studentReducer from '../features/students/studentSlice';
import instituteReducer from '../features/institutes/instituteSlice';

const rootReducer = combineReducers({
    auth: authReducer,
    admin: adminReducer,
    students: studentReducer,
    institutes: instituteReducer
});

export default rootReducer;

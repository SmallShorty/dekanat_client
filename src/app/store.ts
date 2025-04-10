import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';

// Создаем store, используя rootReducer
const store = configureStore({
    reducer: rootReducer,
    //middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(customMiddleware),
});

export type AppDispatch = typeof store.dispatch;
export default store;

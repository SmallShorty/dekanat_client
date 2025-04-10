import axios from 'axios';
import store from "../app/store.ts";

// Создание экземпляра axios с базовым URL и заголовками
const api = axios.create({
    baseURL: '/api',
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
});

// Перехватчик для добавления JSESSIONID в заголовки запроса
api.interceptors.request.use(
    (config) => {
        const token = store.getState().auth.token; // Извлекаем JSESSIONID из Redux
        if (token) {
            config.headers['JSESSIONID'] = token; // Добавляем JSESSIONID в заголовки
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Перехватчик для логирования полного URL запроса
api.interceptors.request.use(
    (config) => {
        // @ts-ignore
        const fullUrl = config.baseURL + config.url;
        console.log('Full Request URL:', fullUrl);
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Перехватчик для логирования ответов
api.interceptors.response.use(
    (response) => {
        console.log('Response:', response);
        return response;
    },
    (error) => {
        console.log('Response Error:', error);
        return Promise.reject(error);
    }
);

api.defaults.xsrfCookieName = 'csrftoken'; // Имя куки с токеном
api.defaults.xsrfHeaderName = 'X-CSRFToken'; // Заголовок для отправки токена
export default api;

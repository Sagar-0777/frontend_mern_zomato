// API Configuration
export const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

// API Endpoints
export const API_ENDPOINTS = {
    // User Auth
    USER_REGISTER: `${API_URL}/api/auth/user/register`,
    USER_LOGIN: `${API_URL}/api/auth/user/login`,

    // Food Partner Auth
    PARTNER_REGISTER: `${API_URL}/api/auth/food-partner/register`,
    PARTNER_LOGIN: `${API_URL}/api/auth/food-partner/login`,

    // Food
    FOOD_LIST: `${API_URL}/api/food`,
    FOOD_LIKE: `${API_URL}/api/food/like`,
    FOOD_SAVE: `${API_URL}/api/food/save`,
    FOOD_CREATE: `${API_URL}/api/food`,
};

export default API_URL;

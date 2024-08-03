import axios from 'axios';

const API_URL = 'http://localhost:5000/api'; // Адрес твоего бэкэнда

const api = axios.create({
  baseURL: API_URL,
});

export const registerUser = async (username) => {
  try {
    const response = await api.post('/users', { username });
    return response.data;
  } catch (error) {
    console.error('Failed to register user:', error);
    throw error;
  }
};

export const getUser = async (username) => {
  try {
    const response = await api.get(`/users?username=${username}`);
    return response.data;
  } catch (error) {
    console.error('Failed to get user:', error);
    throw error;
  }
};

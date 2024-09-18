import axios from 'axios';

const API_URL = 'https://api.escuelajs.co/api/v1';

export const fetchProducts = async () => {
  try {
    const response = await axios.get(`${API_URL}/products`);
    
    console.log("🚀 ~ fetchProducts ~ response:", response)
    return response.data;
  } catch (error) {
    throw new Error('Error al obtener los productos');
  }
};
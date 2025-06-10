import axios from "axios";
export const getData = async (endpoint) => {
  try {
    const response = await axios.get(
      `https://www.horario-de-anime-en-espanol.lat/api/v1/${endpoint}`
    );
    return response.data; // para poder retornar directo tuve que hacer un try catch con .then no retornaba
  } catch (error) {
    console.error("Error submitting anime data:", error);
    return error.response?.status || 500; // Return error status or 500 for internal server errors
  }
};

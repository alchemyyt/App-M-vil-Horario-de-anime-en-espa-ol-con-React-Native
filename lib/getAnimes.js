import axios from "axios";
export const getData = async (endpoint) => {
  try {
    const postHeader = {
      headers: {
        authorization: `Bearer 5d38a39556d4eacd2acbf7a896da19eb650e51a6cdb843e2dbe90a092f4f85c7`,
      },
    };
    const response = await axios.get(
      `https://horario-de-anime-en-castellano.vercel.app/api/v1/${endpoint}`,
      postHeader
    );
    return response.data; // para poder retornar directo tuve que hacer un try catch con .then no retornaba
  } catch (error) {
    console.error("Error submitting anime data:", error);
    return error.response?.status || 500; // Return error status or 500 for internal server errors
  }
};

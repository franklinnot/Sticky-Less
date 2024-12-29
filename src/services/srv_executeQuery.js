
import fetch from "node-fetch";
import dotenv from "dotenv";
dotenv.config();

const API_KEY = process.env.API_KEY_YOUTUBE;

async function executeQuery(q) {

  const query = q.query.q;

  if (!query) {
    throw new Error("Falta el parámetro de búsqueda: srv_executeQuery");
  }

  const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${encodeURIComponent(query)}&key=${API_KEY}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data; // retornamos la respuesta al controlador de busqueda ctrl_search
  } catch (error) {
    console.error("Error:", error);
    throw error; // Re-lanza el error para manejarlo en `ctrl_search`
  }

}

export { executeQuery };
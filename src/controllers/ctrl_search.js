import { json } from "express";
import { executeQuery } from "../services/srv_executeQuery.js";

// procesar json para tener unicamente los datos que necesitamos

async function procesarData(data) {
  if (!data || !data.items) {
    console.log("Datos no válidos o no contienen el campo items");
    return [];
  }

  return data.items
    .filter((video) => video.id.kind === "youtube#video" && video.id.videoId)
    .map((video) => ({
      videoId: video.id.videoId,
      title: video.snippet.title,
      thumbnail: video.snippet.thumbnails.high.url,
      url: `https://www.youtube.com/watch?v=${video.id.videoId}`,
    }));
}

export async function searchVideos(req, res) {
  console.log("Buscando en YouTube...");
  try {
    const answer = await executeQuery(req); // se obtiene la respuesta de la API
    const result = await procesarData(answer); // se procesan los datos
    console.log("Muestra de resultados encontrados:", result.slice(0, 4));
    return res.json({
      results: result,
    });
  } catch (error) {
    console.error("Error al buscar videos:", error.message);
    return res.status(500).json({
      error: "Error al buscar videos en YouTube",
    });
  }
}


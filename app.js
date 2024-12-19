/*

que vendrian a ser las api en mi codigo? o sea, se que es una api pero aparentemente en mi codigo ya tengo una api pero, es de verdad una api un endpoint o algo asi?

*/

import express from "express";
const app = express(); 

import path from "path";
// esto se hace pues se esta usando ECMASript 
import { getGlobals } from "common-es";
const { __dirname } = getGlobals(import.meta.url);

import dotenv from "dotenv";
import ollama from "ollama";

const port = 3000; 


// middleware para servir archivos estáticos
app.use(express.static(path.join(__dirname, "public")));

// ruta principal para servir `index.html`
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});


// endpoint para buscar videos
app.get("/search", (req, res) =>{ 
    console.clear();
    console.log("buscando...");
});


// escuchar las peticiones de los clientes por el puerto:
app.listen(port, () => {
    console.log(`El servidor se encuentra activo en http://localhost:${port}`);

});


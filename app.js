
import express from "express";
import path from "path";
import helmet from "helmet";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
const port = process.env.PORT || 3000; 

const app = express(); 

// middlewares de seguridad y configuracion
app.use(helmet());
app.use(cors());
app.use(cors({
    origin: "htpp://localhost:3000" // unico dominio de origen permitido, por ahora claro
}));

// middelwares de procesamiento de solicitudes
app.use(express.json());
app.use(express.text());

// middleware para servir archivos estaticos de la carpeta public
app.use(express.static(path.join(process.cwd(), "public"))); 

// middleware de registro de solicitudes
app.use((req, res, next) => {
    console.log(`Solicitud: ${req.method} ${req.url}`);
    next(); // pasa al siguiente middleware
});


// RUTAS

// busqueda de videos
import searchRoutes from "./src/routes/search.js";
app.use("/api/search", searchRoutes);



// MANEJO DE ERRORES

app.use((req, res) => {
    res.status(404).send(`Página no encontrada: ${req.method} ${req.url}`);
});

// Error generico -- para todos los casos no manejados anteriormente
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Algo salio mal...");
});


// Iniciar servidor
app.listen(port, () => {
    console.log(`El servidor se encuentra activo en http://localhost:${port}`);
});






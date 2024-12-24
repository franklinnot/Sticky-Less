
import express from "express";
import { validarBusqueda } from "../middlewares/mdl_validateQuery.js";
import { searchVideos } from "../controllers/ctrl_search.js";

const router = express.Router();

// middleware que validara la busqueda y la ruta que la manejara si esta es valida
router.get("/", validarBusqueda, searchVideos); // solicitudes get en /search.js

export default router;

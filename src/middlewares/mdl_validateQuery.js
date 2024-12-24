
import fetch from 'node-fetch';
import validateQuery from '../services/srv_validateQuery.js';

async function validarBusqueda(req, res, next){
    try{
        const {query} = req.query;

        if(!query){
            return res.status(400).json({
                error: "Falta el parámetro de búsqueda."
            });
        }

        const result = await validateQuery(query);

        if(!result || !result.isValid){
            return res.status(400).json({
                error: "La consulta no es válida. Por favor, reformula tu búsqueda"
            });
        }

        // si to salio bien
        console.log("La bosqueda fue valida");
        next();

    }
    catch (error){
        console.error("Error en el middleware de validación de búsqueda: ", error);
        res.status(500).json({ error: "Error interno en el servidor al validar la búsqueda." });
    }
}

export {validarBusqueda};


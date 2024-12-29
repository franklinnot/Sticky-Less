
import fetch from 'node-fetch';
import validateQuery from '../services/srv_validateQuery.js';

async function validarBusqueda(req, res, next){
    try{
        let query = req.query.q;

        query = query?.trim(); // con cambio opcional por si este parametro no existe

        if(!query){
            return res.status(400).json({
                error: "Falta el parámetro de búsqueda."
            });
        }

        req.query.q = query; // sobreescribimos el valor de query de la request

        const result = await validateQuery(query);

        if(!result || !result.isValid){ // 'isValid' es un campo que se espera en el resultado
            const aviso = "La consulta no es válida. Por favor, reformula tu búsqueda";
            console.log(aviso);
            return res.status(400).json({
                error: aviso
            });
        }

        // si to salio bien
        console.log("La búsqueda fue valida");
        next();

    }
    catch (error){
        console.error("Error en el middleware de validación de búsqueda: ", error);
        res.status(500).json({ error: "Error interno en el servidor al validar la búsqueda." });
    }
}

export {validarBusqueda};


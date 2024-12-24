
import ollama from "ollama";
import { jsonSchema, QueryValidationSchema }  from "../schemas/sch_validateQuery.js";

async function validateQuery(query){
    const response = await ollama.chat({
        model: 'llama2-uncensored',
        messages: [
            {
            role: 'system',
            content: `Eres un validador de consultas para una plataforma educativa. 
            Solo aceptas consultas relacionadas con temas de aprendizaje o educación, 
            como matemáticas, física, informática, etc. Devuelve siempre un JSON con 
            "isValid" como true si es educativo y false si no lo es.`
            },
            {role: 'user', content: query}],
        format: jsonSchema,
    });

    console.log("Respuesta con formato de Ollama:", response);

    try{
        const result = QueryValidationSchema.parse(JSON.parse(response.message.content));
        return result;
    }
    catch (error){
        console.error('Error al validar la consulta:', error);
        return null;
    }
}

export default validateQuery;
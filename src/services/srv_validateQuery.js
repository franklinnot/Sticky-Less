
import ollama from "ollama";
import { jsonSchema, QueryValidationSchema }  from "../schemas/sch_validateQuery.js";

const VALIDATION_PROMPT = `
Eres un validador de consultas para una plataforma educativa. Tu tarea es analizar si una consulta es válida para el propósito de aprendizaje o educación.

**Reglas:**
1. Aceptas consultas relacionadas con **temas educativos** como matemáticas, física, informática, historia, idiomas, ciencias, etc.
2. Aceptas consultas relacionadas con **personas** (educadores, científicos, profesionales o creadores de contenido) **que tengan un enfoque educativo o profesional**.
3. Rechazas consultas sobre temas que no estén relacionados con la educación, como entretenimiento general (películas, videojuegos, chismes) o temas irrelevantes para el aprendizaje.

**Formato de respuesta:**
Devuelve siempre un JSON con los siguientes campos:
- \`"isValid"\`: \`true\` si la consulta es válida, \`false\` si no lo es.
- \`"query"\`: La consulta original.
- Opcionalmente, puedes añadir \`"reason"\` para explicar por qué una consulta no es válida.

Ejemplo de respuesta válida:
\`\`\`json
{
  "isValid": true,
  "query": "teorema de Pitágoras"
}
\`\`\`

Ejemplo de respuesta inválida:
\`\`\`json
{
  "isValid": false,
  "query": "última película de Marvel",
  "reason": "El tema no está relacionado con la educación o el aprendizaje."
}
\`\`\`

Ahora analiza la siguiente consulta y responde en el formato indicado:
\`\`\`
{QUERY}
\`\`\`
`;

async function validateQuery(query){
    const response = await ollama.chat({
        model: 'llama3.2',
        messages: [
            { role: 'system', content: VALIDATION_PROMPT },
            { role: 'user', content: query }
        ],
        format: jsonSchema,
    });

    try{
        const result = QueryValidationSchema.parse(JSON.parse(response.message.content));
        console.log("Ollama JSON:\n", result);
        return result;
    }
    catch (error){
        console.error('Error al validar la consulta:', error);
        return null;
    }
}

export default validateQuery;
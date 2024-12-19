

// importamos los modulos instalados con npm de la forma en que ECMAScript lo recomienda
import express from "express";
import ollama from "ollama";

// express

const port = 3000; // puerto que el servidor atendera
// creamos una aplicacion que representara a nuestro servidor, encargado de recibir y responder peticiones
const app = express(); // instancia del servidor

// cada que el cliente (navegador del usuario) solicite un recurso
// se le debe indicar en que URL se esta silicitando ese recurso, como 
// va a recibir los datos de esa peticion, de donde va a obtener los datos, como los
// va a procesar y responder
app.get("/", (require, response) =>{ // en vez de diagonal se pueden precisar las url
    response.send("./public/index.html");
});
// lo que hace arriba es lo siguiente: cuando se reciba una solicitud de la url raiz, responder
// con un Holip

// escuchar las peticiones de los clientes por el puerto:
app.listen(port, () => {
    console.log(`El servidor se encuentra activo en http://localhost:${port}`);

});

// codigo necesario para responder a peticiones
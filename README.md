


# Comandos necesarios

-- comando para inicializar en proyecto en node
npm init -y

-- comando(s) para ejecutar el proyecto:
node app.js




# Instalaciones

-- modulo de ollama
npm install ollama

-- modulo de express js
npm install express

-- modulo de common-es
npm i common-es








# Links de documentación de referencia:

https://ollama.com/blog/python-javascript-libraries

-- Instalación, configuración y selección del modelo de ia
https://github.com/ollama/ollama

https://github.com/ollama/ollama-js

https://www.npmjs.com/package/ollama

-- estructura para un proyecto en nodejs
https://www.geeksforgeeks.org/folder-structure-for-a-node-js-project/

-- cuando usar import from o require?
https://stackoverflow.com/questions/70355404/when-to-use-import-and-when-to-use-require-in-node-js

-- Busqueda de videos con api de youtube
https://developers.google.com/youtube/v3/docs/search/list

-- solucionar el error de "__dirname is not defined in ES module scope" al usar ECMAScript module files
https://bobbyhadz.com/blog/javascript-dirname-is-not-defined-in-es-module-scope

-- modulo para utilizar variables globales sin problema con ES modules
https://www.npmjs.com/package/common-es?activeTab=readme

-- como reiniciar el servidor de nodejs cada que cambia un archivo
https://stackoverflow.com/questions/1972242/how-to-auto-reload-files-in-node-js

-- documentacion del modulo nodemon
https://github.com/remy/nodemon

# Notas

- Se optara por utilizar la forma estandar de importar modulos del actual ECMAScript,
es decir, dejar de lado la siguiente sintaxis de importacion:
// const nombre_modulo = require("nombre_modulo");
Optando por la siguiente forma:
// import nombre_modulo from "nombre_modulo";
Psdt: Esto dependera de cada modulo

- Para que lo anterior se de correctamente, sera necesario colocar lo siguiente en el
package.json para una configuración adecuada:
// "type": "module"


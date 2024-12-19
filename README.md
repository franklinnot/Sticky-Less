# Sticky-Less



# Comandos necesarios

-- comando para inicializar en proyecto en node
npm init -y

-- comando para instalar el modulo de ollama
npm install ollama

-- comando para instalar el modulo de express js
npm install express

-- comando(s) para ejecutar el proyecto:
node index.js



# Instalación, configuración y selección del modelo:

https://github.com/ollama/ollama



# Links de documentación de referencia:

https://ollama.com/blog/python-javascript-libraries

https://github.com/ollama/ollama-js

https://www.npmjs.com/package/ollama

https://www.geeksforgeeks.org/folder-structure-for-a-node-js-project/

https://stackoverflow.com/questions/70355404/when-to-use-import-and-when-to-use-require-in-node-js

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


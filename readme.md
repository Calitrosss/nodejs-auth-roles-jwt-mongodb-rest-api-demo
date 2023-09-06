Dependencias
npm i express bcryptjs cors dotenv jsonwebtoken mongoose morgan helmet

Dependencias para desarrollo
npm i @babel/core @babel/cli @babel/node @babel/preset-env nodemon -D

Script generar archivos producción en package.json
"build": "babel src --out-dir build"

Script ejecutar modo desarrollo en package.json
"dev": "nodemon src/index.js --exec babel-node"

Script ejecutar archivos de producción en package.json
"start": "node build/index.js"

Archivo .babelrc
{
"presets": ["@babel/preset-env"]
}

Generar archivos producción
npm run build

Ejecutar en modo desarrollo
npm run dev

Ejecutar en modo producción
npm start

Iniciar bd mongoDB (terminal cmd)
mongod

Iniciar shell mongoDB (teerminal cmd)
mongosh

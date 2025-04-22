# 🎬 CRUD de Películas con MongoDB, TypeScript y Mongoose

Este proyecto es una implementación simple de un CRUD (Create, Read, Update, Delete) para gestionar películas utilizando **MongoDB**, **Mongoose** y **TypeScript**. El objetivo es practicar el uso de bases de datos sin necesidad de crear una API.

## 🚀 Tecnologías utilizadas

- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [ts-node](https://typestrong.org/ts-node/)

## 📁 Estructura del proyecto

```bash
TP-MONGO/ 
├── config/ 
│     └── mongo.ts # Conexión a la base de datos 
├── models/ 
│     └── Movie.ts # Esquema de Mongoose para películas 
├── routes/ 
│     └── movies.ts # Funciones CRUD
├── tests/ 
│     └── movies.test.ts # Pruebas CRUD con datos de ejemplo 
├── .env # Variables de entorno
├── .env.example # Ejemplo de .env 
├── .gitignore 
├── index.ts
├── package.json 
├── tsconfig.json 
└── README.md


## 🎥 Entidad: Película

El modelo de película incluye los siguientes campos:

- `titulo`: string  
- `director`: string  
- `anio`: number  
- `duracion`: number  
- `genero`: string  
- `calificacion`: number  

## ⚙️ Cómo ejecutar el proyecto

1. Cloná el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/tu-repo.git
   cd tu-repo

2. Instalá las dependencias:
   ```bash
   npm install

3. Configurá tu conexión a MongoDB en el archivo .env, por ejemplo:
   ```bash
   MONGO_URI=mongodb://localhost:27017/tp-peliculas

4. Ejecutá las funciones de prueba con:
   ```bash
   npx ts-node tests/movies.test.ts

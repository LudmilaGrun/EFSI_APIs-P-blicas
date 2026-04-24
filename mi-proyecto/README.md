# 🧩 Mini Pokédex Web

Aplicación web desarrollada con React que consume la API pública PokéAPI para buscar y visualizar información de Pokémon.

---

## 🎯 Objetivo

Comprender cómo funciona una API REST, aprender a consumir datos desde React y transformar datos JSON en una interfaz visual.

---

## 🌐 API utilizada

https://pokeapi.co/

### Endpoints usados

- Obtener un Pokémon por nombre:
https://pokeapi.co/api/v2/pokemon/{name}

- Obtener un Pokémon por ID:
https://pokeapi.co/api/v2/pokemon/{id}

- Obtener una lista limitada de Pokémon:
https://pokeapi.co/api/v2/pokemon?limit=20

- Obtener información por tipo:
https://pokeapi.co/api/v2/type/{type}

- Error intencional:
https://pokeapi.co/api/v2/pokemon/pokemon-inexistente

---

## ⚙️ Funcionalidades

- Búsqueda de Pokémon por nombre o ID  
- Visualización de:
  - Nombre  
  - Imagen  
  - Tipo(s)  
  - Peso  
  - Altura  
- Indicador de carga (loading)  
- Manejo de errores (Pokémon inexistente)  
- Listado de Pokémon  
- Filtro por nombre o tipo  

---

## 🛠️ Tecnologías utilizadas

- React  
- JavaScript (ES6+)  
- Fetch API  
- HTML / CSS  

---

## 🧠 Decisiones tomadas

- Se utilizó fetch para realizar las peticiones HTTP.  
- Se implementó async/await para mejorar la legibilidad.  
- Se separaron funciones para organizar el código.  
- Se agregó un estado de loading para mejorar la experiencia del usuario.  
- Se validó el input para evitar búsquedas vacías.  

---

## 📁 Estructura del proyecto

src/
 ├── components/
 │    ├── SearchBar.jsx
 │    ├── PokemonCard.jsx
 │    └── PokemonList.jsx
 │
 ├── services/
 │    └── api.js
 │
 ├── App.jsx
 └── main.jsx

---

## ⚠️ Dificultades encontradas

- Entender la estructura del JSON de la API  
- Manejar errores cuando el Pokémon no existe  
- Acceder a propiedades anidadas (tipos)  
- Implementar filtro por tipo  

---

## 🚀 Cómo ejecutar el proyecto

1. Clonar el repositorio:
git clone https://github.com/tu-usuario/tu-repo.git

2. Instalar dependencias:
npm install

3. Ejecutar la app:
npm run dev

---

## 📌 Conclusión

Este proyecto permitió aprender a consumir APIs REST, manejar datos asincrónicos y construir interfaces dinámicas con React.
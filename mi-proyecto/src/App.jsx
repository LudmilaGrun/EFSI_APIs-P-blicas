// Importo funciones de React
import { useState, useEffect } from "react";

// Importo mi componente (tarjeta de Pokémon)
import PokemonCard from "./components/PokemonCard";

// Importo los estilos
import "./App.css";

function App() {
//guarda la accion2par(menos los que dicen falso y nombre)
 const [pokemon, setPokemon] = useState(null);
 const [nombre, setNombre] = useState("");
 const [error, setError] = useState("");
 const [loading, setLoading] = useState(false);

 const [lista, setLista] = useState([]);
 const [loadingLista, setLoadingLista] = useState(false);

 const [tipoFiltro, setTipoFiltro] = useState("nombre");
 const [tipoSeleccionado, setTipoSeleccionado] = useState("fire");

 const buscarPokemon = async () => {

    // Validación: si no hay input(permite que el usuario escriba información, y con onChange guardo ese valor en el estado.):
   if (!nombre) {
     setError("Escribí algo");
     return;
   }

   setLoading(true);
   setError("");

 try {
      // fetch = función para pedir datos a una API
      const res = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${nombre.toLowerCase()}`
      );

      // Si la respuesta no es válida → error
      if (!res.ok) {
        throw new Error("No existe ese Pokémon");
      }

      // Convierto la respuesta a JSON
      const data = await res.json();

      // Guardo el Pokémon en el estado
      setPokemon(data);

    } catch (err) {
      // Si ocurre un error
      setError(err.message);
      setPokemon(null);


    
      //CONCEPTO CHAT - LO ACLARO EN EL CAMPUS
        //setTimeout 
    } finally {
      // finally siempre se ejecuta
      // simulo un pequeño tiempo de carga
      setTimeout(() => {
        setLoading(false);
      }, 1500);
    }
  };


 const obtenerLista = async () => {
   setLoadingLista(true);

try {
      // Traigo lista básica (solo nombres y URLs)
      const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=20");
      const data = await res.json();

      // CONCEPTO CHAT - LO ACLARE EN EL CAMPUS
      // Promise.all = ejecuta muchas peticiones al mismo tiempo
      //Lo que hace en este caso: “Toma los 20 Pokémon de la lista y 
      // después trae todos sus detalles en paralelo para que cargue más rápido.”
      const detalles = await Promise.all(
        data.results.map(async (p) => {
          const res2 = await fetch(p.url);
          return await res2.json();
        })
      );

      // Guardo todos los Pokémon con detalles
      setLista(detalles);

    } catch (error) {
      console.log(error);

    } finally {
      setTimeout(() => {
        setLoadingLista(false);
      }, 1500);
    }
  };

  //CODIGO AUTO1
 useEffect(() => {
   obtenerLista();
 }, []);

 return (
   <div className="container">
     <h1>Mini Pokédex</h1>

     <div className="buscador">
       <input
         type="text"
         placeholder="Nombre o ID"
         value={nombre}
         onChange={(e) => setNombre(e.target.value)}
       />
       <button onClick={buscarPokemon}>Buscar</button>
     </div>

     {loading && <p className="loading">Cargando...</p>}
     {error && <p className="error">{error}</p>}

     {pokemon && <PokemonCard data={pokemon} />}

     <h2>Lista de Pokémon</h2>

     <div className="filtros">
       <button onClick={() => setTipoFiltro("nombre")}>Por nombre</button>
       <button onClick={() => setTipoFiltro("tipo")}>Por tipo</button>
     </div>

     {tipoFiltro === "tipo" && (
       <select onChange={(e) => setTipoSeleccionado(e.target.value)}>
         <option value="fire">fire</option>
         <option value="water">water</option>
         <option value="grass">grass</option>
         <option value="bug">bug</option>
         <option value="poison">poison</option>
       </select>
     )}

     {loadingLista && <p className="loading">Cargando lista...</p>}

     <div className="grid">
       {lista

       // FILTER = filtra elementos
          .filter((p) => {
            if (tipoFiltro === "nombre") return true;

            // CONCEPTO CHAT - LO ACLARE EN EL CAMPUS
            //some = verifica si cumple condición
            //“Uso some() para verificar si el Pokémon tiene el tipo seleccionado,
            // y así decidir si se muestra o no en la lista.”
            return p.types.some(
              (t) => t.type.name === tipoSeleccionado
            );
          })

          //  SORT = ordena los pokemons de la lista
          .sort((a, b) => {
            if (tipoFiltro === "nombre") {
              return a.name.localeCompare(b.name);
            }
            return 0;
          })

          // 🧩 MAP = recorre y muestra en pantalla (con react)
          .map((p) => (
            <PokemonCard key={p.id} data={p} />
          ))}
      </div>
    </div>
  );
}

export default App;
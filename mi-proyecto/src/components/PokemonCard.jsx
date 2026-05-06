// Componente que muestra la información de un Pokémon
function PokemonCard({ data }) {
  return (
    <div className="card">
      {/* Nombre del Pokémon */}
      <h3>{data.name}</h3>

      {/* Imagen del Pokémon */}
      <img src={data.sprites.front_default} alt={data.name} />

      {/* Tipos (puede tener más de uno) */}
      <p>
        Tipo: {data.types.map((t) => t.type.name).join(", ")}
      </p>

      {/* Peso */}
      <p>Peso: {data.weight}</p>

      {/* Altura */}
      <p>Altura: {data.height}</p>
    </div>
  );
}

export default PokemonCard;
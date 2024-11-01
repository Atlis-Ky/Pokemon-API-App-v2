import { first151Pokemon, getFullPokedexNumber } from "../utils";

export default function SideNav() {

  return (
    <nav>
      <div className={"header"}>
    <h1 className="text-gradient">Pokédex</h1>
      </div>
      <input />
      {first151Pokemon.map((pokemon, pokemonIndex) => {
        return (
        <button key={pokemonIndex} className={`nav-card `}>
          <p>{pokemon}</p>
          <p>{getFullPokedexNumber(pokemonIndex)}</p>
        </button>
        )
      })}
    </nav>
  )
}

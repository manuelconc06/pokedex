import { useContext } from "react";
import {PokemonContext} from '../../context/pokemon.js'
import "./pokedex.css"
import PokemonForm from "../../components/pokedexForm/index.js";
import PokedexScreen from "../pokedexScreen/index.js";

function PokeApi() {
  const {pokemon, loading, encounters}= useContext(PokemonContext);
  return (
    <div className="pokedex">
      <div className="pokedex-left">
        <div className="pokedex-left-top">
          <div className="light is-sky is-big" />
          <div className="light is-red" />
          <div className="light is-yellow" />
          <div className="light is-green" />
        </div>
        <div className="pokedex-screen-container">
          {pokemon !== null &&  
      <PokedexScreen pokemons={pokemon}  loading={loading} encounters={encounters}/>}
        </div>
        <div className="pokedex-left-bottom">
          <div className="pokedex-left-bottom-lights">
            <div className="light is-blue is-medium" />
            <div className="light is-green is-large" />
            <div className="light is-orange is-large" />
          </div>
          <PokemonForm/>
        </div>
      </div>
      <div className="pokedex-right-front" />
      <div className="pokedex-right-back" />
    </div>
  );
}

export default PokeApi

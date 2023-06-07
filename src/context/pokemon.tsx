import { createContext, useState } from "react";
import { fetchPokemons, fetchPokemonsEncounters } from "../api/pokemons";

interface PokemonContext {
  dataPokemons: (name: string) => Promise<void>;
  pokemon: Record<string, unknown> | null;
  loading: boolean;
  encounters: string[];
}
export const PokemonContext = createContext({} as PokemonContext);

export const PokemonContextProvider = (props: any) => {
  const [pokemon, setPokemon] = useState(null);
  const [encounters, setEncounters] = useState([]);
  const [loading, setLoading] = useState(true);

  const dataPokemons = async (name: string) => {
    setLoading(true);

    const data = await fetchPokemons(name);
    if (data) {
      const encounters = await fetchPokemonsEncounters(data.id);
      setEncounters(encounters);
    }
    setPokemon(data);
    setLoading(false);
  };

  return (
    <PokemonContext.Provider
      value={{
        dataPokemons,
        pokemon,
        loading,
        encounters,
      }}
    >
      {props.children}
    </PokemonContext.Provider>
  );
};

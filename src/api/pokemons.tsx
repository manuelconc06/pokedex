import { url } from "../utils/apiUrl";

export const fetchPokemons = async (name: string) => {

  try {
    const response = await fetch(url + name.trim());
    if (!response.ok) throw await response.json();
    return response.json();
  } catch (e) {
    console.log(e);
  }
};

export const fetchPokemonsEncounters = async (id: number) => {

  try {
    const response = await fetch(url + id + '/encounters' );
    if (!response.ok) throw await response.json();
    return response.json();
  } catch (e) {
    console.log(e);
  }
};

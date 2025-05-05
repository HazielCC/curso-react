import {createContext} from "react";
import {Pokemon} from "../../interfaces/pokemon/PokemonInterfaces";
import {PokemonDetailInterface} from "../../interfaces/pokemon/PokemonDetailInterfaces.tsx";

export interface PokemonContextType {
    getPokemons: () => Promise<void>;
    pokemons?: Pokemon[];
    getPokemonsById: (id: string) => Promise<void>;
    pokemonDetail?: PokemonDetailInterface | null; // Cambiado de PokemonDetailInterface[] a PokemonDetailInterface | null
    loading: boolean;
}

const PokemonContext = createContext<PokemonContextType>({
    // Default implementation, can be overridden by provider
    getPokemons: async () => {
    },
    pokemons: [],
    // Default implementation, can be overridden by provider
    getPokemonsById: async () => {
    },
    pokemonDetail: null,
    loading: false,
});

export default PokemonContext;

import {createContext} from "react";
import {Pokemon} from "../../interfaces/pokemon/PokemonInterfaces";
import {PokemonDetailInterface} from "../../interfaces/pokemon/PokemonDetailInterfaces.tsx";

export interface PokemonContextType {
    getPokemons: () => Promise<void>;
    pokemons?: Pokemon[];
    getPokemonsById: (id: string) => Promise<void>;
    pokemonDetail?: PokemonDetailInterface | null; // Cambiado de PokemonDetailInterface[] a PokemonDetailInterface | null
    loading: boolean;

    // Error handling
    isError?: boolean;
    errorMessage?: string;
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
    // Error handling
    isError: false,
    errorMessage: "",
});

export default PokemonContext;

import {createContext} from "react";
import {Pokemon} from "../../interfaces/pokemon/PokemonInterfaces";
import {PokemonDetailInterface} from "../../interfaces/pokemon/PokemonDetailInterfaces.tsx";

export interface PokemonContextType {
    getPokemons: () => Promise<void>;
    pokemons?: Pokemon[];
    getPokemonsById: () => Promise<void>;
    pokemon?: PokemonDetailInterface[];
}

const PokemonContext = createContext<PokemonContextType>({
    // Default implementation, can be overridden by provider
    getPokemons: async () => {
    },
    pokemons: [],
    // Default implementation, can be overridden by provider
    getPokemonsById: async () => {
    },
    pokemon: [],
});

export default PokemonContext;

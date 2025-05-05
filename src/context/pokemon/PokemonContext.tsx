import {createContext} from "react";
import {Pokemon} from "../../interfaces/pokemon/PokemonInterfaces";

export interface PokemonContextType {
    getPokemons: () => Promise<void>;
    pokemons?: Pokemon[];
}

const PokemonContext = createContext<PokemonContextType>({
    // Default implementation, can be overridden by provider
    getPokemons: async () => {
    },
    pokemons: [],
});

export default PokemonContext;

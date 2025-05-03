import {createContext} from "react";

interface Pokemon {
    name: string;
    url: string;
}

interface PokemonContextType {
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

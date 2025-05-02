import { createContext } from "react";

interface PokemonContextType {
  getPokemons: () => Promise<void>;
}

const PokemonContext = createContext<PokemonContextType>({
  getPokemons: async () => {}
});

export default PokemonContext;

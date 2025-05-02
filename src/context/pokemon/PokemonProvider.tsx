import { ApiCall } from "../../api/ApiCall";
import {useState} from "react";
import PokemonContext from "./PokemonContext";

import { ReactNode } from "react";

export function PokemonProvider({children}: {children: ReactNode}) {
    const [pokemons, setPokemons] = useState([]);

    const getPokemons =async () => {
        try {
            const pokemons = await ApiCall("https://pokeapi.co/api/v2/pokemon/ditto")
            setPokemons(pokemons);
        } catch (error) {
            console.error("Error fetching pokemons:", error);
            setPokemons([])
        }
    }

    return (
        <PokemonContext.Provider value={{getPokemons}}>
            {children}
        </PokemonContext.Provider>
    );
}
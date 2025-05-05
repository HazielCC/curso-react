import {ApiCall} from "../../api/ApiCall";
import {ReactNode, useCallback, useState} from "react";
import PokemonContext from "./PokemonContext";

export function PokemonProvider({children}: { children: ReactNode }) {
    const [pokemons, setPokemons] = useState([]);

    const getPokemons = useCallback(async () => {
        try {
            const response = await ApiCall("https://pokeapi.co/api/v2/pokemon?limit=100&offset=0")
            setPokemons(response.results);
        } catch (error) {
            console.error("Error fetching pokemons:", error);
            setPokemons([])
        }
    }, []);

    return (
        <PokemonContext.Provider value={{getPokemons, pokemons}}>
            {children}
        </PokemonContext.Provider>
    );
}
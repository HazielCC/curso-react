import {ApiCall} from "../../api/ApiCall";
import {ReactNode, useState} from "react";
import PokemonContext from "./PokemonContext";

export function PokemonProvider({children}: { children: ReactNode }) {
    const [pokemons, setPokemons] = useState([]);

    const getPokemons = async () => {
        try {
            const response = await ApiCall("https://pokeapi.co/api/v2/ability/?limit=100&offset=100")
            setPokemons(response.results);
        } catch (error) {
            console.error("Error fetching pokemons:", error);
            setPokemons([])
        }
    }

    return (
        <PokemonContext.Provider value={{getPokemons, pokemons}}>
            {children}
        </PokemonContext.Provider>
    );
}
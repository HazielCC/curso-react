import {ApiCall} from "../../api/ApiCall";
import {ReactNode, useCallback, useState} from "react";
import PokemonContext from "./PokemonContext";

export function PokemonProvider({children}: { children: ReactNode }) {
    const [pokemons, setPokemons] = useState([]);
    const [pokemon, setPokemon] = useState([]);
    const getPokemons = useCallback(async () => {
        try {
            const response = await ApiCall("https://pokeapi.co/api/v2/pokemon?limit=100&offset=0")
            setPokemons(response.results);
        } catch (error) {
            console.error("Error fetching pokemons:", error);
            setPokemons([])
        }
    }, []);

    const getPokemonsById = useCallback(async (id: string) => {
        // Se obtiene el ID del pokemon de la url
        if (!id) {
            return Promise.resolve("Error: ID is undefined");
        }
        try {
            const response = await ApiCall(`https://pokeapi.co/api/v2/pokemon/${id}`)
            setPokemon(response.results);
        } catch (error) {
            console.error("Error fetching pokemon by id:", error);
            setPokemon([])
        }
    }, []);

    return (
        <PokemonContext.Provider value={{getPokemons, pokemons, getPokemonsById, pokemon}}>
            {children}
        </PokemonContext.Provider>
    );
}
import {ApiCall} from "../../api/ApiCall";
import {ReactNode, useCallback, useState} from "react";
import PokemonContext from "./PokemonContext";
import {PokemonDetailInterface} from "../../interfaces/pokemon/PokemonDetailInterfaces";

export function PokemonProvider({children}: { children: ReactNode }) {
    const [pokemons, setPokemons] = useState([]);
    const [pokemonDetail, setPokemonDetail] = useState<PokemonDetailInterface | null>(null);
    const [loading, setLoading] = useState(false);
    const getPokemons = useCallback(async (): Promise<void> => {
        try {
            setLoading(true);
            const response = await ApiCall("https://pokeapi.co/api/v2/pokemon?limit=100&offset=0")
            setPokemons(response.results);
        } catch (error) {
            console.error("Error fetching pokemons:", error);
            setPokemons([])
        } finally {
            setLoading(false);
        }
    }, []);

    const getPokemonsById = useCallback(async (id: string): Promise<void> => {
        // Se obtiene el ID del pokemon de la url
        if (!id) {
            setPokemonDetail(null);
            return;
        }
        try {
            setLoading(true);
            const response = await ApiCall(`https://pokeapi.co/api/v2/pokemon/${id}`)
            setPokemonDetail(response);
        } catch (error) {
            console.error("Error fetching pokemon by id:", error);
            setPokemonDetail(null)
        } finally {
            setLoading(false);
        }
    }, []);

    return (
        <PokemonContext.Provider value={{
            getPokemons,
            pokemons,
            getPokemonsById,
            pokemonDetail,
            loading
        }}>
            {children}
        </PokemonContext.Provider>
    );
}
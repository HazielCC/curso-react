import {ApiCall} from "../../api/ApiCall";
import {ReactNode, useCallback, useState} from "react";
import PokemonContext from "./PokemonContext";
import {PokemonDetailInterface} from "../../interfaces/pokemon/PokemonDetailInterfaces";

export function PokemonProvider({children}: { children: ReactNode }) {
    const [pokemons, setPokemons] = useState([]);
    const [pokemonDetail, setPokemonDetail] = useState<PokemonDetailInterface | null>(null);
    const [loading, setLoading] = useState(false);
    // Error message
    const [errorMessage, setErrorMessage] = useState("");
    const [isError, setIsError] = useState(false);
    const getPokemons = useCallback(async (): Promise<void> => {
        try {
            setLoading(true);
            setIsError(false);
            const response = await ApiCall("https://pokeapi.co/api/v2/pokemon?limit=100&offset=0")
            setPokemons(response.results);
        } catch (error) {
            setPokemons([])
            setIsError(true);
            setErrorMessage("Error fetching pokemons: " + error);
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
            setIsError(false);

            const response = await ApiCall(`https://pokeapi.co/api/v2/pokemon/${id}`)
            setPokemonDetail(response);
        } catch (error) {
            setPokemonDetail(null)
            setIsError(true);
            setErrorMessage("Error fetching pokemon by id" + error);
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
            loading,

            // Error handling
            isError,
            errorMessage
        }}>
            {children}
        </PokemonContext.Provider>
    );
}
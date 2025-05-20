import {PokemonList} from "./components/PokemonList.tsx";
import {Loading} from "../../components/Loading.tsx";
import {ErrorMessage} from "../../components/ErrorMessage.tsx";
import {UsePokemonStore} from "../../stores/UsePokemonStore.tsx";
import {useEffect} from "react";
import {Typography} from "@mui/material";
import {useQuery} from "@tanstack/react-query";


/**
 * Vista principal de Pokémon
 * Función con useContext para obtener los Pokémon
 */
export const PokemonView = () => {
    const {getPokemons, pokemons, isError, errorMessage} = UsePokemonStore();

    const {isLoading} = useQuery({
        queryKey: ["pokemons"],
        queryFn: getPokemons,
        // onError: (error) => {
        //     console.error("Error al cargar los Pokémon:", error);
        // },
    })


    useEffect(() => {
        getPokemons().catch(null);
    }, [getPokemons]);

    // Pantalla de cargando
    if (isLoading) {
        return <Loading message="Cargando todos los Pokemon"/>
    }
    return (
        <div>
            {isError ? <ErrorMessage message={errorMessage ?? "Ocurrió un error"}/> : (
                <>
                    <Typography variant={"h1"}>Pokemon</Typography>
                    <PokemonList pokemons={pokemons ?? []}/>
                </>
            )}
        </div>
    );
};

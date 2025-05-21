import {PokemonList} from "./components/PokemonList.tsx";
import {Loading} from "../../components/Loading.tsx";
import {ErrorMessage} from "../../components/ErrorMessage.tsx";
import {UsePokemonStore} from "../../stores/UsePokemonStore.tsx";
import {Typography} from "@mui/material";
import {useQuery} from "@tanstack/react-query";


/**
 * Vista principal de Pokémon
 */
export const PokemonView = () => {
    const {getPokemons, errorMessage} = UsePokemonStore();

    const {isLoading, isError, data} = useQuery({
        queryKey: ["pokemons"],
        queryFn: getPokemons,
    });

    // Pantalla de cargando
    if (isLoading) {
        return <Loading message="Cargando todos los Pokemon"/>
    }
    return (
        <div>
            {isError ? <ErrorMessage message={errorMessage ?? "Ocurrió un error"}/> : (
                <>
                    <Typography variant={"h1"}>Pokemon</Typography>
                    <PokemonList pokemons={data ?? []}/>
                </>
            )}
        </div>
    );
};

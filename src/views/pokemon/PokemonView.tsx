import {PokemonList} from "./components/PokemonList.tsx";
import {ErrorMessage} from "../../components/ErrorMessage.tsx";
import {UsePokemonStore} from "../../stores/UsePokemonStore.tsx";
import {Typography} from "@mui/material";
import {useQuery} from "@tanstack/react-query";
import {ShimmerPokemonList} from "./Shimmer/ShimmerPokemonList.tsx";


/**
 * Vista principal de Pokémon
 */
export const PokemonView = () => {
    const {getPokemons, errorMessage} = UsePokemonStore();

    const {isLoading, isError} = useQuery({
        queryKey: ["pokemons"],
        queryFn: getPokemons,
    });

    // Pantalla de cargando con efecto shimmer
    if (isLoading) {
        return <ShimmerPokemonList/>
    }
    return (
        <div>
            {isError ? <ErrorMessage message={errorMessage ?? "Ocurrió un error"}/> : (
                <>
                    <Typography variant={"h1"}>Pokemon</Typography>
                    <PokemonList/>
                </>
            )}
        </div>
    );
};

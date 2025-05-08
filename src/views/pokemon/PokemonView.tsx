import {PokemonList} from "./components/PokemonList.tsx";
import {Loading} from "../../components/Loading.tsx";
import {ErrorMessage} from "../../components/ErrorMessage.tsx";
import {UsePokemonStore} from "../../zustand/stores/UsePokemonStore.tsx";
import {useEffect} from "react";


/**
 * Vista principal de Pokémon
 * Función con useContext para obtener los Pokémon
 */
export const PokemonView = () => {
    const getPokemons = UsePokemonStore((state) => state.getPokemons);
    const pokemons = UsePokemonStore((state) => state.pokemons);
    const loading = UsePokemonStore((state) => state.loading);
    const isError = UsePokemonStore((state) => state.isError);
    const errorMessage = UsePokemonStore((state) => state.errorMessage);

    useEffect(() => {
        getPokemons().catch(null);
    }, [getPokemons]);

    // Pantalla de cargando
    if (loading) {
        return <Loading message="Cargando todos los Pokemon"/>
    }
    return (
        <div>
            {isError ? <ErrorMessage message={errorMessage ?? "Ocurrió un error"}/> : (
                <>
                    <h1>Pokémon</h1>
                    <PokemonList pokemons={pokemons ?? []}/>
                </>
            )}
        </div>
    );
};

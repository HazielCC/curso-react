import {useContext, useEffect} from "react";
import PokemonContext from "../../context/pokemon/PokemonContext.tsx";
import {PokemonList} from "./components/PokemonList.tsx";
import {Loading} from "../../components/Loading.tsx";
import {ErrorMessage} from "../../components/ErrorMessage.tsx";

export const PokemonView = () => {
    const {getPokemons, pokemons, loading, isError, errorMessage} = useContext(PokemonContext);

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
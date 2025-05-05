import {useContext, useEffect} from "react";
import PokemonContext from "../../context/pokemon/PokemonContext.tsx";
import {PokemonList} from "./components/PokemonList.tsx";

export const PokemonView = () => {
    const {getPokemons, pokemons} = useContext(PokemonContext);

    useEffect(() => {
        getPokemons().catch(null);
    }, [getPokemons]);

    return (
        <div>
            <h1>Pokémon</h1>

            {/* Se muestra la lista de Pokemons en pantalla */}
            <PokemonList pokemons={pokemons ?? []}/>
        </div>
    );
};
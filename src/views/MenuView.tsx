import {useContext, useEffect} from "react";
import PokemonContext from "../context/pokemon/PokemonContext";

export const MenuView = () => {
    const {getPokemons, pokemons} = useContext(PokemonContext);

    useEffect(() => {
        getPokemons().catch(console.error);
    }, [getPokemons]);

    console.log(pokemons)
    return (
        <div>
            <h1> Menú Principal</h1>
            <ul>
                <li>Opción 1</li>
            </ul>
        </div>
    )
};
import {useContext, useEffect} from "react";
import PokemonContext from "../context/pokemon/PokemonContext";
import {Link} from "react-router-dom";
import {paths} from "../routes/paths.tsx";

export const MenuView = () => {
    const {getPokemons, pokemons} = useContext(PokemonContext);

    useEffect(() => {
        getPokemons().catch(null);
    }, [getPokemons]);

    console.log(pokemons);

    return (
        <div>
            <h1>Menú Principal</h1>
            <nav>
                <ul>
                    <li>
                        <Link to={paths.home}>Inicio</Link>
                    </li>
                    <li>
                        <Link to={paths.pokemonView}>Ver Pokémon</Link>
                    </li>
                    {/* Puedes agregar más enlaces según necesites */}
                </ul>
            </nav>
        </div>
    )
};
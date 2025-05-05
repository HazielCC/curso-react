import {Link} from "react-router-dom";
import {paths} from "../routes/paths.tsx";

export const MenuView = () => {


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
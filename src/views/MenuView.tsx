import {Link} from "react-router-dom";
import {paths} from "../routes/paths.tsx";
import '../App.css'

export const MenuView = () => {
    // const [searchParams] = useSearchParams();
    // const code = searchParams.get("code"); // Obtiene el valor del parámetro 'code'
    // const setCode = UseOAuthWhop((state) => state.setCode);// Guardamos el código en Zustand si existe
    // if (code) {
    //     setCode(code);
    // }
    return (
        <div className="App">
            <h1>Menú Principal</h1>
            <nav>
                <ul>
                    <li>
                        <Link to={paths.home}>Inicio</Link>
                    </li>
                    <li>
                        <Link to={paths.pokemonView}>Ver Pokémon</Link>
                    </li>
                    <li>
                        <Link to={paths.movieView}>Ver Películas</Link>
                    </li>
                    {/*<li>*/}
                    {/*    <Link to={paths.loginWhop}>Ejemplo inicio de sesión Whop</Link>*/}
                    {/*</li>*/}
                    {/* Puedes agregar más enlaces según necesites */}
                </ul>
            </nav>
        </div>
    )
};

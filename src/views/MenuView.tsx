import {Link} from "react-router-dom";
import {paths} from "../routes/paths.tsx";
import '../App.css'
import {Box, Button, Typography} from "@mui/material";
import {CustomSpacing} from "../core/constants/customSpacing.tsx";

export const MenuView = () => {
    // const [searchParams] = useSearchParams();
    // const code = searchParams.get("code"); // Obtiene el valor del parámetro 'code'
    // const setCode = UseOAuthWhop((state) => state.setCode);// Guardamos el código en Zustand si existe
    // if (code) {
    //     setCode(code);
    // }
    return (
        <Box>
            <Typography variant={"h1"}>Menú Principal</Typography>
            <Box component={"nav"} sx={{
                display: "flex",
                flexDirection: "column",
                gap: CustomSpacing.small,
            }}>
                <Button variant="contained" component={Link} to={paths.home}>
                    Inicio
                </Button>
                <Button variant="contained" component={Link} to={paths.pokemonView}>
                    Ver Pokémon
                </Button>
                <Button variant="contained" component={Link} to={paths.movieView}>
                    Ver Películas
                </Button>
                {/*<li>*/}
                {/*    <Link to={paths.loginWhop}>Ejemplo inicio de sesión Whop</Link>*/}
                {/*</li>*/}
                {/* Puedes agregar más enlaces según necesites */}
            </Box>
        </Box>
    )
};

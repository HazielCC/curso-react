import { BrowserRouter,  Route, Routes } from "react-router-dom";
import { ErrorPage } from "../views/error/ErrorPage";
import {MenuView} from "../views/MenuView.tsx";
import {PokemonView} from "../views/pokemon/PokemonView.tsx";

export const RoutesComponent = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MenuView/>}/>
                <Route path="/pokemon-view" element={<PokemonView/>}/>

                {/*<Route path="/adding-items-page" element={<ExampleCards/>}/>*/}
                {/*<Route path="/login" element={<LoginPage/>}/>*/}
                {/*<Route path="/search-page" element={<SearchPage/>}/>*/}

                {/* Error 404 */}
                <Route path="*" element={<ErrorPage/>}/>
            </Routes>
        </BrowserRouter>
    );
};
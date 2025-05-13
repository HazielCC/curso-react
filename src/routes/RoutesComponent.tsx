import {BrowserRouter, Route, Routes} from "react-router-dom";
import {ErrorPage} from "../views/error/ErrorPage";
import {MenuView} from "../views/MenuView.tsx";
import {PokemonView} from "../views/pokemon/PokemonView.tsx";
import {paths} from "./paths.tsx";
import {PokemonDetailView} from "../views/pokemon/PokemonDetailView.tsx";
import {ScrollToTop} from "../components/ScrollToTop.tsx";
import {MovieView} from "../views/Movies/MovieView.tsx";
import {ResultsView} from "../views/Movies/ResultsView.tsx";

export const RoutesComponent = () => {
    return (
        <BrowserRouter>
            <ScrollToTop/>

            <Routes>
                <Route path={paths.home} element={<MenuView/>}/>

                {/*Whop*/}
                {/*<Route path={paths.loginWhop} element={<LoginWhop/>}/>*/}
                {/*<Route path={paths.callBackView} element={<CallBackView/>}/>*/}

                {/* Pokemon */}
                <Route path={paths.pokemonView} element={<PokemonView/>}/>
                <Route path={paths.pokemonDetailView} element={<PokemonDetailView/>}/>

                {/* Movies */}
                <Route path={paths.movieView} element={<MovieView/>}/>
                <Route path={paths.resultsView} element={<ResultsView/>}/>

                {/*<Route path="/adding-items-page" element={<ExampleCards/>}/>*/}
                {/*<Route path="/login" element={<LoginPage/>}/>*/}
                {/*<Route path="/search-page" element={<SearchPage/>}/>*/}

                {/* Error 404 */}
                <Route path="*" element={<ErrorPage/>}/>
            </Routes>
        </BrowserRouter>
    );
};
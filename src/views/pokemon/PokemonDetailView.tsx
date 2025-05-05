import {useParams} from "react-router-dom";
import {useContext, useEffect} from "react";
import PokemonContext from "../../context/pokemon/PokemonContext.tsx";

export const PokemonDetailView = () => {
    const {getPokemonsById, pokemon} = useContext(PokemonContext);

    // Se obtiene el ID del pokemon de la url
    const {id} = useParams<{ id: string }>();
    /* Cada vez que se cambie el ID es necesario mostrar su información */
    useEffect(() => {
        getPokemonsById(id).catch(null);
        console.log(pokemon);
    }, [getPokemonsById]);
    return (
        <></>
    );
};
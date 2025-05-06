import {useParams} from "react-router-dom";
import {useContext, useEffect} from "react";
import PokemonContext from "../../context/pokemon/PokemonContext.tsx";
import {PokemonStats} from "./components/PokemonStats.tsx";
import {Loading} from "../../components/Loading.tsx";

export const PokemonDetailView = () => {
    const {getPokemonsById, pokemonDetail, loading} = useContext(PokemonContext);

    // Se obtiene el ID del pokemon de la url
    const {id} = useParams<{ id: string }>();
    /* Cada vez que se cambie el ID es necesario mostrar su información */
    useEffect(() => {
        if (id != null) {
            getPokemonsById(id).catch(null);
        }
    }, [getPokemonsById, id]);
    console.log(pokemonDetail);

    // Pantalla de cargando
    if (loading) {
        return <Loading message="Cargando detalles del Pokemon"/>
    }

    // Muestra la información del pokemon
    return (
        <div>
            <h2>Detalles del Pokemon</h2>
            <p>Nombre: {pokemonDetail?.name}</p>
            <p>Altura: {pokemonDetail?.height}</p>
            <p>Peso: {pokemonDetail?.weight}</p>
            <img src={pokemonDetail?.sprites.front_default} alt={pokemonDetail?.name}/>
            <PokemonStats stats={pokemonDetail?.stats ?? []}/>
        </div>
    );
};
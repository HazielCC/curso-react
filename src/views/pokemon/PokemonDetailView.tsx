import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {PokemonStats} from "./components/PokemonStats.tsx";
import {Loading} from "../../components/Loading.tsx";
import {PokemonContextType, UsePokemonStore} from "../../zustand/stores/UsePokemonStore.tsx";

export const PokemonDetailView = () => {
    const getPokemonsById = UsePokemonStore((state: PokemonContextType) => state.getPokemonsById);
    const pokemonDetail = UsePokemonStore((state: PokemonContextType) => state.pokemonDetail);
    const loading = UsePokemonStore((state: PokemonContextType) => state.loading);

    // Se obtiene el ID del pokemon de la url
    const {id} = useParams<{ id: string }>();
    /* Cada vez que se cambie el ID es necesario mostrar su información */
    useEffect(() => {
        if (id != null) {
            getPokemonsById(id).catch(null);
        }
    }, [getPokemonsById, id]);

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
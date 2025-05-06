import {create} from "zustand/react";
import {ApiCall} from "../../api/ApiCall.tsx";

export const UsePokemonStore = create((set, get) => ({
    pokemons: [],
    pokemonDetail: null,
    loading: false,
    isError: false,
    errorMessage: "",

    getPokemons: async () => {
        set({loading: true, isError: false, errorMessage: ""});
        try {
            const response = await ApiCall("https://pokeapi.co/api/v2/pokemon?limit=100&offset=0")
            set({
                pokemons: response.results,
            });
        } catch (error) {
            set({
                isError: true,
                errorMessage: "Error al cargar los Pokémon" + error,
            });
        } finally {
            set({
                loading: false,
            });
        }
    },

    getPokemonsById: async (id: string) => {
        set({loading: true, isError: false, errorMessage: ""});
        try {
            const response = await ApiCall(`https://pokeapi.co/api/v2/pokemon/${id}`)
            set({
                pokemonDetail: response,
            });
        } catch (error) {
            set({
                isError: true,
                errorMessage: "Error al cargar el Pokémon" + error,
            });
        } finally {
            set({
                loading: false,
            });
        }
    },
}));

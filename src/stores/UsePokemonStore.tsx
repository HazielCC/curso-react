import {create} from "zustand/react";
import {ApiCall} from "../api/ApiCall.tsx";
import {PokemonDetailInterface} from "../interfaces/pokemon/PokemonDetailInterfaces.tsx";
import {Pokemon} from "../interfaces/pokemon/PokemonInterfaces.tsx";

export interface PokemonContextType {
    fetchPokemons: () => Promise<void>;
    pokemons?: Pokemon[];
    getPokemonsById: (id: string) => Promise<void>;
    pokemonDetail?: PokemonDetailInterface | null; // Cambiado de PokemonDetailInterface[] a PokemonDetailInterface | null

    // Error handling
    // isError?: boolean;
    errorMessage?: string;
}

export const UsePokemonStore = create<PokemonContextType>()((set) => ({
    pokemons: [],
    pokemonDetail: null,
    errorMessage: "",

    fetchPokemons: async () => {
        set({errorMessage: ""});
        try {
            const response = await ApiCall("https://pokeapi.co/api/v2/pokemon?limit=100&offset=0");
            set({
                pokemons: response.results,
            });
            return response.results;
        } catch (error) {
            set({
                errorMessage: "Error al cargar los Pokémon" + error,
            });
            return [];
        }
    },

    getPokemonsById: async (id: string) => {
        set({errorMessage: ""});
        try {
            const response = await ApiCall(`https://pokeapi.co/api/v2/pokemon/${id}`);
            set({
                pokemonDetail: response,
            });
        } catch (error) {
            set({
                errorMessage: "Error al cargar el Pokémon" + error,
            });
        }
    },
}));

import { create } from "zustand/react";
import { ApiCall } from "../api/ApiCall.tsx";
import { PokemonDetailInterface } from "../interfaces/pokemon/PokemonDetailInterfaces.tsx";
import { Pokemon } from "../interfaces/pokemon/PokemonInterfaces.tsx";

export interface PokemonContextType {
    getPokemons: () => Promise<void>;
    pokemons?: Pokemon[];
    getPokemonsById: (id: string) => Promise<void>;
    pokemonDetail?: PokemonDetailInterface | null; // Cambiado de PokemonDetailInterface[] a PokemonDetailInterface | null
    loading: boolean;

    // Error handling
    isError?: boolean;
    errorMessage?: string;
}

export const UsePokemonStore = create<PokemonContextType>()((set) => ({
    pokemons: [],
    pokemonDetail: null,
    loading: false,
    isError: false,
    errorMessage: "",

    getPokemons: async () => {
        set({ loading: true, isError: false, errorMessage: "" });
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
        set({ loading: true, isError: false, errorMessage: "" });
        try {
            const response = await ApiCall(`https://pokeapi.co/api/v2/pokemon/${id}`)
            console.log(response);
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

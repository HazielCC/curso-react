import {PopularMoviesInterface} from "../../interfaces/Movies/PopularMoviesApi";
import {create} from "zustand/react";
import {UrlBaseInterface} from "../../interfaces/Movies/UrlBaseInterface.tsx";
import axios from "axios";

export interface PopularMoviesContextType {
    getPopularMovies: () => Promise<void>;
    popularMovies?: PopularMoviesInterface[] | null; // Cambiado de Result[] a Result | null
    loading: boolean;

    // Error handling
    isError?: boolean;
    errorMessage?: string;
}

export const PopularMoviesApi = create<PopularMoviesContextType>()((set) => ({
    popularMovies: [],
    loading: false,
    isError: false,
    errorMessage: "",

    getPopularMovies: async () => {
        set({loading: true, isError: false, errorMessage: ""});
        try {
            const url = `${UrlBaseInterface.url_movie}/3/movie/popular`;
            const response = await axios.get(url, {
                headers: {
                    Authorization: `Bearer ${UrlBaseInterface.api_key}`,
                    "Content-Type": "application/json",
                },
            });
            set({
                popularMovies: response.data,
            });
        } catch (error) {
            set({
                isError: true,
                errorMessage: "Error al cargar las películas populares" + error,
            });
        } finally {
            set({
                loading: false,
            });
        }
    },
}));

import {Box, Button, SnackbarCloseReason, TextField, Typography} from "@mui/material";
import "../../styles/images.css";
import {ChangeEvent, SyntheticEvent, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {paths} from "../../routes/paths.tsx";
import {SnackBar} from "../../components/SnackBar.tsx";
import {PopularMoviesApi, PopularMoviesContextType} from "../../api/Movies/PopularMoviesApi.tsx";
import {SliderMovies} from "./components/SliderMovies.tsx";
import {CustomBorderRadius} from "../../core/constants/customBorderRadius.tsx";

export const MovieView = () => {
    const [search, setSearch] = useState("");
    const [snackBarOpen, setSnackBarOpen] = useState(false);
    const navigation = useNavigate();

    // Apis
    const getPopularMovies = PopularMoviesApi((state: PopularMoviesContextType) => state.getPopularMovies);
    const popularMovies = PopularMoviesApi((state: PopularMoviesContextType) => state.popularMovies);

    useEffect(() => {
        getPopularMovies().catch(null);
    }, [getPopularMovies]);

    const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
        const {value} = event.target;
        setSearch(value);
    };

    const handleClearSearch = () => {
        setSearch("");
    };
    const handleSearchClick = () => {
        if (search.trim() === "") {
            console.log("Please enter a search term.");
            setSnackBarOpen(true);
            return;
        }
        console.log("Searching for:", search);
        navigation(`${paths.resultsView.replace(":id", search)}`);
    };
    const handleClose = (_event?: SyntheticEvent | Event, reason?: SnackbarCloseReason) => {
        if (reason === "clickaway") {
            return;
        }
        setSnackBarOpen(false);
    };

    return (
        <Box
            sx={{
                width: "100dvw",
                height: "100dvh",
            }}
        >
            <Box sx={{
                maxHeight: {xs: "350px", md: "450px"},
                backgroundImage: `url('/assets/images/cinema.webp')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                padding: '1rem',
            }}>
                <Box sx={{
                    width: "100%",
                    maxWidth: "1080px",
                    color: "#fff",
                    margin: "auto",
                }}>
                    <Typography typography={"h1"} sx={{textAlign: 'left'}}>Bienvenido</Typography>
                    <Typography variant="h1" typography={"h2"} sx={{textAlign: 'left'}}>
                        Millones de películas, series y gente por descubrir. Explora ya.
                    </Typography>
                    <TextField
                        label="Buscar película, serie de TV o persona..."
                        variant="outlined"
                        sx={{
                            width: "100%",
                            backgroundColor: "#f4eded",
                            borderRadius: CustomBorderRadius.medium,
                        }}
                        value={search}
                        onChange={handleSearch}
                    />
                    <Box sx={
                        {
                            display: "flex",
                            justifyContent: "space-around",
                            margin: "1rem auto",
                            maxWidth: {xs: "100%", md: "35%"},
                        }
                    }>
                        <Button
                            variant="text"
                            color="error"
                            sx={{"&:focus": {outline: "none"}}}
                            onClick={handleClearSearch}
                        >
                            Limpiar Búsqueda
                        </Button>
                        <Button
                            variant="contained"
                            color="info"
                            sx={{
                                color: "#fff",
                                "&:focus": {outline: "none"},
                            }}
                            onClick={handleSearchClick}
                        >
                            Buscar
                        </Button>
                    </Box>
                </Box>


            </Box>
            <Box sx={{
                width: "100%",
                maxWidth: "1080px",
                margin: "2rem auto",
                padding: '1rem',

            }}>
                <Typography variant="h2" sx={{textAlign: 'left'}}>Películas Populares</Typography>
                <SliderMovies popularMovies={popularMovies?.results ?? []}/>
            </Box>

            <SnackBar
                open={snackBarOpen}
                onClose={handleClose}
                severity="error"
                message="Por favor ingresa una pélicula."
                vertical="bottom"
                horizontal="right"
            />
        </Box>
    );
};

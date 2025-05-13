import Grid from "@mui/material/Grid";
import {Box, Button, SnackbarCloseReason, TextField, Typography} from "@mui/material";
import cinema from "../../assets/cinema.webp";
import "../../styles/images.css"
import {ChangeEvent, SyntheticEvent, useState} from "react";
import {useNavigate} from "react-router-dom";
import {paths} from "../../routes/paths.tsx";
import {SnackBar} from "../../components/SnackBar.tsx";

export const MovieView = () => {
    const [search, setSearch] = useState("");
    const [snackBarOpen, setSnackBarOpen] = useState(false);
    const navigation = useNavigate();

    const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
        const {value} = event.target;
        setSearch(value);
    };

    const handleClearSearch = () => {
        setSearch("");
    };

    const handleSearchClick = () => {
        // Implement search functionality here
        if (search.trim() === "") {
            console.log("Please enter a search term.");
            setSnackBarOpen(true);
            return;
        }
        console.log("Searching for:", search);
        navigation(`${paths.resultsView.replace(":id", search)}`);
    }

    const handleClose = (
        _event?: SyntheticEvent | Event,
        reason?: SnackbarCloseReason,
    ) => {
        if (reason === 'clickaway') {
            return;
        }
        setSnackBarOpen(false);
    };
    return (
        <Box sx={{
            width: "100vw", height: "100vh", overflow: "hidden",
        }}>
            <Grid container sx={{height: "100%"}}>
                <Grid
                    size={{xs: 12, md: 4}}
                    sx={{
                        border: "1px solid red",
                        height: {xs: "30%", md: "100%"},
                    }}
                >
                    <img src={cinema} className={"image"} alt={"imagen de un cine"}/>
                </Grid>
                <Grid
                    size={{xs: 12, md: 8}}
                    sx=
                        {{
                            border: "1px solid blue",
                            height: {xs: "70%", md: "100%"},
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            flexDirection: "column",
                            padding: "2rem",
                        }}
                >
                    <Typography variant={"h1"}>Películas</Typography>
                    <TextField
                        label="Busca tu película"
                        variant={"outlined"}
                        sx={{
                            width: "100%",
                            maxWidth: "400px",
                            backgroundColor: "#f4eded",
                        }}
                        value={search}
                        onChange={handleSearch}
                    />
                    <Box sx={{
                        justifyContent: "space-around",
                        display: "flex",
                        width: "100%",
                        maxWidth: "400px",
                        marginTop: "1rem",
                    }}>
                        <Button
                            variant={"text"}
                            color={"error"}
                            sx={{'&:focus': {outline: 'none'}}}
                            onClick={handleClearSearch}
                        >
                            Limpiar Búsqueda
                        </Button>
                        <Button
                            variant={"contained"}
                            sx={{
                                backgroundColor: "#1976d2",
                                color: "#fff",
                                '&:focus': {
                                    outline: 'none'
                                }
                            }}
                            onClick={handleSearchClick}
                        >
                            Buscar
                        </Button>
                    </Box>
                </Grid>
            </Grid>
            <SnackBar
                open={snackBarOpen}
                onClose={handleClose}
                severity="error"
                message="Por favor ingresa una pélicula."
            />
        </Box>
    );
};

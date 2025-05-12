import Grid from "@mui/material/Grid";
import {Box, Input, InputLabel, TextField} from "@mui/material";
import cinema from "../../assets/cinema.webp";
import "../../styles/images.css"

export const MovieView = () => {
    return (
        <Box sx={{
            width: "100vw",
            height: "100vh",
            overflow: "hidden",
        }}>
            <Grid container sx={{
                height: "100%",
                display: "flex",
            }}>
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
                        }}
                >
                    <h2>Este ocupa el 70%</h2>
                    <TextField   label="Outlined"> Hola mundo</TextField >

                </Grid>
            </Grid>
        </Box>
    );
};

import {Box, Grid} from "@mui/material";
import "../../css/images.css";

export const MovieView = () => {
    return (
        <Grid container spacing={2} sx={{height: "100vh", width: "100%"}}>
            {/* Primera sección - 30% en escritorio, 100% en móvil */}
            <Grid item xs={2} sm={3}>
                <Box sx={{backgroundColor: "lightgray", padding: 2, height: "100%", width: "100%"}}>Sección 1</Box>
            </Grid>

            {/* Segunda sección - 70% en escritorio, 100% en móvil */}
            <Grid item xs={6} sm={9}>
                <Box sx={{backgroundColor: "darkgray", padding: 2, height: "100%", width: "100%"}}>Sección 2</Box>
            </Grid>
        </Grid>
    );
};
import {Link} from "react-router-dom";
import {Box, Button, Typography} from "@mui/material";
import {CustomBorderRadius} from "../../../core/constants/customBorderRadius.tsx";
import {capitalizeFirstLetter} from "../../../core/utilities/InputsUtilities.tsx";
import {CustomPadding} from "../../../core/constants/customPading.tsx";

export const PokemonSeeDetailsButton = ({name, url}: { name: string, url: string }) => {
    console.log(name, url);
    // Se obtiene el ID del pokemon de la url
    const getIdFromUrl = (url: string) => {
        const urlParts = url.split("/");
        return urlParts[urlParts.length - 2];
    }

    return (
        <Box sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            padding: CustomPadding.small,
            borderRadius: CustomBorderRadius.small,
            backgroundColor: "#f0f0f0",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        }}>
            <Typography variant={"h3"}>{capitalizeFirstLetter(name)}</Typography>
            <Button variant="text" component={Link} to={`/pokemon-detail/${getIdFromUrl(url)}`}>
                ver detalles
            </Button>
        </Box>
    );
};
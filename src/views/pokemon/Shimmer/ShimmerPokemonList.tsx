import {Box, List, ListItem, Typography} from "@mui/material";
import {CustomBorderRadius} from "../../../core/constants/customBorderRadius.tsx";
import {CustomPadding} from "../../../core/constants/customPading.tsx";
import {ShimmerButton, ShimmerTitle} from "shimmer-effects-react";

/**
 * Shimmer effect component that mimics the PokemonList structure
 * Used for loading states
 */
export const ShimmerPokemonList = () => {
    // Create an array of 10 items to simulate a list of Pokémon
    const shimmerItems = Array(12).fill(null);

    return (
        <Box>
            <Typography variant={"h1"}>Pokemon</Typography>
            <Typography variant="h2">Lista de Pokemons</Typography>
            <List>
                {shimmerItems.map((_, index) => (
                    <ListItem key={index}>
                        <Box sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            width: "100%",
                            height: "3.5rem",
                            padding: CustomPadding.small,
                            borderRadius: CustomBorderRadius.small,
                            backgroundColor: "#f0f0f0",
                            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",


                        }}>
                            <ShimmerTitle mode="light" line={10} gap={6}/>
                            <ShimmerButton size="sm" mode="light"/>
                        </Box>
                    </ListItem>
                ))}
            </List>
        </Box>
    );
};
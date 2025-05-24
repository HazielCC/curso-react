import {PokemonSeeDetailsButton} from "./PokemonSeeDetailsButton.tsx";
import {Box, List, ListItem, Typography} from "@mui/material";
import {UsePokemonStore} from "../../../stores/UsePokemonStore.tsx";

export const PokemonList = () => {
    const {pokemons = []} = UsePokemonStore();

    return (
        <Box>
            <Typography variant="h2">Lista de Pokemons</Typography>
            <List>
                {pokemons?.map((pokemon, index) => (
                    <ListItem key={index}>
                        <PokemonSeeDetailsButton name={pokemon.name} url={pokemon.url}/>
                    </ListItem>
                ))}
            </List>
        </Box>
    );
};
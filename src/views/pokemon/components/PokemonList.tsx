import {Pokemon} from "../../../interfaces/pokemon/PokemonInterfaces";
import {PokemonSeeDetailsButton} from "./PokemonSeeDetailsButton.tsx";
import {Box, List, ListItem, Typography} from "@mui/material";

export const PokemonList = ({pokemons}: { pokemons: Pokemon[] }) => {
    console.log(pokemons);
    return (
        <Box>
            <Typography variant="h2"> Lista de Pokémons </Typography>
            <List>
                {pokemons.map((pokemon, index) => (
                    <ListItem key={index}>
                        <PokemonSeeDetailsButton name={pokemon.name} url={pokemon.url}/>
                    </ListItem>
                ))}
            </List>
        </Box>
    );
};
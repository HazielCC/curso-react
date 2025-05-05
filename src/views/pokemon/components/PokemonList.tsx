import {Pokemon} from "../../../interfaces/pokemon/PokemonInterfaces";
import {PokemonSeeDetailsButton} from "./PokemonSeeDetailsButton.tsx";

export const PokemonList = ({pokemons}: { pokemons: Pokemon[] }) => {
    console.log(pokemons);
    return (
        <div>
            <h2>
                Lista de Pokémons
            </h2>

            <div>
                {pokemons.map((pokemon, index) => (
                        <PokemonSeeDetailsButton key={index} name={pokemon.name} url={pokemon.url}/>
                    )
                )}
            </div>
        </div>
    );
};
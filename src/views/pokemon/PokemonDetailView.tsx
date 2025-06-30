import {Box, Grid, Paper, styled, Typography} from "@mui/material";
import {useEffect} from "react";
import {useParams} from "react-router-dom";
import {CustomSpacing} from "../../core/constants/customSpacing.tsx";
import {PokemonContextType, UsePokemonStore} from "../../stores/UsePokemonStore.tsx";
import {CustomBorderRadius} from "../../core/constants/customBorderRadius.tsx";
import {CustomPadding} from "../../core/constants/customPading.tsx";
import {PokemonStats} from "./components/PokemonStats.tsx";

export const PokemonDetailView = () => {
    const getPokemonsById = UsePokemonStore((state: PokemonContextType) => state.getPokemonsById);
    const pokemonDetail = UsePokemonStore((state: PokemonContextType) => state.pokemonDetail);
    // const loading = UsePokemonStore((state: PokemonContextType) => state.loading);

    // Se obtiene el ID del pokemon de la url
    const {id} = useParams<{ id: string }>();
    /* Cada vez que se cambie el ID es necesario mostrar su información */
    useEffect(() => {
        if (id != null) {
            getPokemonsById(id).catch(null);
        }
    }, [getPokemonsById, id]);


    const Item = styled(Paper)(({theme}) => ({
        backgroundColor: "#fff",
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: "center",
        color: (theme.vars ?? theme).palette.text.secondary,
        ...theme.applyStyles("dark", {
            backgroundColor: "#1A2027",
        }),
    }));


    const pokemonInfoItem = <Item
        sx={{
            display: "flex",
            alignItems: "center",
            gap: CustomSpacing.small,
            backgroundColor: (theme) => theme.palette.secondary.main,
        }}>
        <img
            src="/assets/images/ic_info_8_bits.webp"
            alt={pokemonDetail?.name}
            style={{
                height: "35px",
                filter: "brightness(0) invert(1)"
            }}/>
        <Typography variant={"h1"}
                    sx={{
                        color: (theme) => theme.palette.secondary.contrastText
                    }}
        >Information</Typography>
    </Item>;

    // Muestra la información del pokemon
    return (
        <Grid>
            <Grid container spacing={2}>
                {/* Header */}
                <Grid size={12}>
                    {pokemonInfoItem}
                </Grid>
                {/* Information */}
                <Grid size={{xs: 12, md: 4}}>
                    <Item sx={{
                        marginBottom: CustomPadding.xsmall,
                        backgroundColor: (theme) => theme.palette.secondary.main,
                    }}>
                        <Box sx={{display: "flex", alignItems: "center", gap: CustomSpacing.small}}>
                            <img
                                src="/assets/images/pokebola.webp"
                                alt={pokemonDetail?.name}
                                style={{
                                    width: "50px",
                                    height: "50px",
                                }}
                            />
                            <Typography
                                variant={"h2"}
                                sx={{
                                    color: (theme) => theme.palette.secondary.contrastText,
                                    textTransform: "capitalize",
                                }}
                            >
                                #{id} {pokemonDetail?.name}
                            </Typography>
                        </Box>
                    </Item>

                    {/* Image */}
                    <Item>
                        <img
                            src={pokemonDetail?.sprites.front_default}
                            alt={pokemonDetail?.name}
                            className="image"
                            style={{
                                maxHeight: "350px",
                                width: "100%",
                            }}
                        />
                    </Item>

                </Grid>
                <Grid container size={{xs: 12, md: 8}} spacing={2} sx={{
                    flexDirection: "column",
                }}>
                    <Grid>
                        <Item sx={{
                            marginBottom: CustomPadding.xsmall,
                        }}>
                            <Typography variant={"body1"}>Type</Typography>
                            <Box sx={{display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
                                {pokemonDetail?.types.map((typeObj) => (
                                    <Typography
                                        key={typeObj.type.name}
                                        variant={"body1"}
                                        sx={{
                                            backgroundColor: (theme) => theme.palette.secondary.main,
                                            color: (theme) => theme.palette.secondary.contrastText,
                                            paddingInline: CustomPadding.medium,
                                            paddingBlock: CustomPadding.small,
                                            margin: CustomSpacing.small,
                                            borderRadius: CustomBorderRadius.small,
                                        }}
                                    >
                                        {typeObj.type.name}
                                    </Typography>
                                ))}
                            </Box>
                        </Item>
                        <Item>
                            <PokemonStats stats={pokemonDetail?.stats ?? []}/>
                        </Item>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

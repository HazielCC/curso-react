import {Stat} from "../../../interfaces/pokemon/PokemonDetailInterfaces.tsx";
import {
    Paper,
    Slider,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography
} from "@mui/material";
import {CustomSpacing} from "../../../core/constants/customSpacing.tsx";

export function PokemonStats({stats}: Readonly<{ stats: Stat[] }>) {
    console.log(stats);
    return (
        <>
            <Typography variant={"h3"}> Stats </Typography>
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Nombre</TableCell>
                            <TableCell>Base Stat</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {stats?.map((stat: Stat,) => (
                            <TableRow key={stat.stat.name}>
                                <TableCell>{stat.stat.name}</TableCell>
                                <TableCell sx={
                                    {
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                        gap: CustomSpacing.small,
                                    }
                                }>
                                    {stat.base_stat}
                                    <Slider
                                        aria-label="Base Stat"
                                        value={stat.base_stat}
                                        shiftStep={30}
                                        min={0}
                                        max={100}
                                        disabled
                                        sx={{"& .MuiSlider-thumb": {display: "none"}}}
                                    />
                                </TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}
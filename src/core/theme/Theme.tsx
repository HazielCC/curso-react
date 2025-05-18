import {CustomTypography} from "../constants/customTypography.tsx";
import {createTheme} from "@mui/material";
import {CustomPalette} from "../constants/customColors.tsx";

export const theme = createTheme({
    spacing: 2,
    typography: CustomTypography,
    palette: CustomPalette,
});

export const pokemonTheme = createTheme({
    spacing: 2,
    typography: {
        fontFamily: `"8Bit", Arial, sans-serif`,
        h1: {
            fontSize: "2rem",
            fontWeight: 700,
            lineHeight: 1.5,
        },
        h2: {
            fontSize: "1.5rem",
            fontWeight: 600,
            lineHeight: 1.4,
            padding: "0.5rem 0",
        },
        h3: {
            fontSize: "1.5rem",
            fontWeight: 500,
            lineHeight: 1.3,
            padding: "0.5rem 0",
        },
    },


    palette: CustomPalette,
    components: {
        MuiCssBaseline: {
            styleOverrides: `
                @font-face {
                    font-family: "8Bit";
                    src: url("/fonts/8_bits.ttf") format("truetype");
                }
            `
        }
    }
});
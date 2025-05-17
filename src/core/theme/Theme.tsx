import {CustomTypography} from "../constants/customTypography.tsx";
import {createTheme} from "@mui/material";
import {CustomPalette} from "../constants/customColors.tsx";

export const theme = createTheme({
    spacing: 2,
    typography: CustomTypography,
    palette: CustomPalette,
});

import {Box, Typography} from "@mui/material";
import {theme} from "../core/theme/Theme.tsx";
import {MoonLoader} from "react-spinners";

export const Loading = ({message}: { message: string }) => {
    // Se puede usar un mensaje para mostrar el estado de carga
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <Typography variant="h2">
                {message}
            </Typography>
            <MoonLoader
                color={theme.palette.primary.main}
                size={"60"}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </Box>
    );
};
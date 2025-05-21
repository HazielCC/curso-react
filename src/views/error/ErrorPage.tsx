import {Box, Typography} from "@mui/material";

export const ErrorPage = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100dvh',
            }}>
            <Typography variant={"h1"}>
                Error 404: Página no encontrada
            </Typography>
            <Typography variant={"h2"}>
                Lo sentimos, la página que buscas no existe. :(
            </Typography>
        </Box>
    )
};
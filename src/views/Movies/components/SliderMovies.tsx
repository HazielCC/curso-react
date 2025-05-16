import {Result} from "../../../interfaces/Movies/PopularMoviesApi.tsx";
import {Box, ImageList, ImageListItem, Typography} from "@mui/material";

export const SliderMovies = ({popularMovies}: Readonly<{ popularMovies: Result[] }>) => {
    return (
        <Box sx={{
            padding: 2,
            width: "100%",
            maxWidth: "1080px",
            margin: "0 auto",
        }}>
            <Typography variant="h2">Tendencia</Typography>
            <ImageList
                sx={{
                    display: "flex",
                    overflowX: "auto",
                }}
                gap={24}
            >
                {popularMovies.map((movie, index) => (
                    <ImageListItem key={index}>
                        <img
                            src={`https://image.tmdb.org/t/p/w220_and_h330_face/${movie.poster_path}`}
                            alt={movie.title}
                            style={{
                                borderRadius: "8px",
                            }}
                        />
                        <Typography variant="subtitle1">{movie.title}</Typography>
                    </ImageListItem>
                ))}
            </ImageList>
        </Box>
    );
};

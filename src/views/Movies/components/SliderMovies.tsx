import {Result} from "../../../interfaces/Movies/PopularMoviesApi.tsx";
import {Box, ImageList, Typography} from "@mui/material";

export const SliderMovies = ({popularMovies}: Readonly<{ popularMovies: Result[] }>) => {
    console.log(popularMovies);

    return (
        <Box sx={
            {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: 2,
                backgroundColor: '#f0f0f0',
                borderRadius: 1,
                boxShadow: 1,
            }
        }>
            <Typography variant={"h2"}> Tendencia </Typography>

            <ImageList
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    overflowX: 'auto',
                    overflowY: 'hidden',
                    '&::-webkit-scrollbar': {height: '8px'},
                    '&::-webkit-scrollbar-track': {backgroundColor: '#f1f1f1'},
                    '&::-webkit-scrollbar-thumb': {backgroundColor: '#888', borderRadius: '4px'},
                }}
                gap={16}
            >
                {popularMovies.map((movie, index) => (
                        <div key={index}>
                            <img src={`https://image.tmdb.org/t/p/w220_and_h330_face/${movie.poster_path}`}
                                 alt={movie.title}
                                 style={{
                                     width: '110px',
                                     height: 'auto',
                                     borderRadius: '8px',
                                 }}
                            />
                            <Typography variant={"subtitle1"}>
                                {movie.title}
                            </Typography>
                        </div>
                    )
                )}
            </ImageList>
        </Box>
    );
};

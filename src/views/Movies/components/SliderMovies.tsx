import {Result} from "../../../interfaces/Movies/PopularMoviesApi.tsx";
import {Box, ImageList, ImageListItem} from "@mui/material";
import {CustomBorderRadius} from "../../../core/constants/customBorderRadius.tsx";

export const SliderMovies = ({popularMovies}: Readonly<{ popularMovies: Result[] }>) => {
    return (
        <Box>
            <ImageList
                sx={{
                    display: "flex",
                    overflowX: "auto",
                    margin: "0, auto",
                }}
                gap={24}
            >
                {popularMovies.map((movie, index) => (
                    <ImageListItem key={index}>
                        <img
                            src={`https://image.tmdb.org/t/p/w220_and_h330_face/${movie.poster_path}`}
                            alt={movie.title}
                            style={{
                                borderRadius: CustomBorderRadius.medium,
                                height: "auto",
                                width: "160px"

                            }}
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </Box>
    );
};

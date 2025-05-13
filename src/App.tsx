import {RoutesComponent} from "./routes/RoutesComponent.tsx";
import {createTheme, ThemeProvider} from "@mui/material";

const theme = createTheme({
    typography: {
        fontFamily: [
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif'
        ].join(','),

        h1: {
            fontSize: '2rem',
            fontWeight: 700,
            lineHeight: 1.5,
            padding: '0.5rem 0',
        },
        h2: {
            fontSize: '1.5rem',
            fontWeight: 600,
            lineHeight: 1.4,
        },
        h3: {
            fontSize: '1.25rem',
            fontWeight: 500,
            lineHeight: 1.3,
        },

        h4: {
            fontSize: '1.125rem',
            fontWeight: 400,
            lineHeight: 1.2,
        },
        body1: {
            fontSize: '1rem',
            fontWeight: 400,
            lineHeight: 1.5,
        },
        body2: {
            fontSize: '0.875rem',
            fontWeight: 400,
            lineHeight: 1.4,
        },
    },
    palette: {
        primary: {
            main: '#1976d2',
            light: '#2196f3',
            dark: '#115293',
            contrastText: '#fff'
        },
        secondary: {
            main: '#dc004e',
            light: '#e33371',
            dark: '#9a0036',
            contrastText: '#fff'
        },
    }
});

function App() {
    return (
        <ThemeProvider theme={theme}>
            <RoutesComponent/>
        </ThemeProvider>
    )
}

export default App

import {RoutesComponent} from "./routes/RoutesComponent.tsx";
import {Container, ThemeProvider} from "@mui/material";
import {theme} from "./core/theme/Theme.tsx";


function App() {
    return (
        <ThemeProvider theme={theme}>
            <Container>
                <RoutesComponent/>
            </Container>
        </ThemeProvider>
    )
}

export default App

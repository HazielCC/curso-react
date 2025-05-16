import {RoutesComponent} from "./routes/RoutesComponent.tsx";
import {ThemeProvider} from "@mui/material";
import {theme} from "./core/theme/Theme.tsx";


function App() {
    return (
        <ThemeProvider theme={theme}>
            <RoutesComponent/>
        </ThemeProvider>
    )
}

export default App

import {PokemonProvider} from './context/pokemon/PokemonProvider'
import {RoutesComponent} from "./routes/RoutesComponent.tsx";

function App() {
    return (
        <PokemonProvider>
            <RoutesComponent/>
        </PokemonProvider>
    )
}

export default App

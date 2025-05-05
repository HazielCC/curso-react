import './App.css'
import {PokemonProvider} from './context/pokemon/PokemonProvider'
import {RoutesComponent} from "./routes/RoutesComponent.tsx";

function App() {
    return (
        <div className="App">
            <PokemonProvider>
                <RoutesComponent/>
            </PokemonProvider>
        </div>
    )
}

export default App

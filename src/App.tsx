import './App.css'
import {PokemonProvider} from './context/pokemon/PokemonProvider'
import {MenuView} from './views/MenuView'

function App() {
    return (
        <div className="App">
            <PokemonProvider>
                <MenuView/>
            </PokemonProvider>
        </div>
    )
}

export default App

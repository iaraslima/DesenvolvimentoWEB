import PokemonContexto from "./MeuContexto";
import ComponentePai from "./ComponentePai";
import {useState} from "react";

const ComponenteAvo = () => {

    const [contador, setContador] = useState(1)

    const incrementar = () => {
        setContador(contador + 1)
    }

    return (
        <PokemonContexto.Provider value={contador}>
            <div>
                <h2>Componente Avô</h2>
                <img src ={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${contador}.png`}
                     alt="Pokemon"
                     style={{width:"100px"}} />
                <button onClick={incrementar}>
                    Aumentar Número
                </button>
                <ComponentePai/>
            </div>
        </PokemonContexto.Provider>
    )
}

export default ComponenteAvo
import ComponenteFilho from "./ComponenteFilho";
import {useContext} from "react";
import PokemonContexto from "./MeuContexto";

const ComponentePai = () => {

    const number = useContext(PokemonContexto)

    return (
        <div>
            <h2>Componente Pai</h2>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${number+1}.png`}
                 alt="Pokemon"
                 style={{width: "100px"}}/>
            <ComponenteFilho/>
        </div>
    )
}

export default ComponentePai
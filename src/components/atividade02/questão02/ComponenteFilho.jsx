import PokemonContexto from "./MeuContexto";
import {useContext} from "react";

const ComponenteFilho = () => {

    const number = useContext(PokemonContexto)

    return (
        <div>
            <h2>Componente Filho</h2>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${number+2}.png`}
                 alt="Pokemon"
                 style={{width: "100px"}}/>
        </div>
    )
}

export default ComponenteFilho
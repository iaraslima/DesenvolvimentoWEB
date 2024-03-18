import {useState} from "react";
import PokemonImagem from "./PokemonImagem";
import {PokemonContexto} from "./PokemonContext";

const PokemonPrincipal = () => {
    //const id = 1
    const [id, setId] = useState(1)
    return (
        <div>
            <h1> Pokemon</h1>
            <PokemonContexto.Provider value={{id: id, setId: setId}}>
                <PokemonImagem/>
            </PokemonContexto.Provider>
        </div>
    )
}

export default PokemonPrincipal
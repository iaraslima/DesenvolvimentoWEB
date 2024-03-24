import PokemonContexto from "./MeuContexto";
import ComponentePai from "./ComponentePai";

const ComponenteAvo = () => {
    const number = 1
    return (
        <PokemonContexto.Provider value={number}>
            <div>
                <h2>Componente Avô</h2>
                <img src ={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${number}.png`}
                     alt="Pokemon"
                     style={{width:"100px"}} />
                <ComponentePai/>
            </div>
        </PokemonContexto.Provider>
    )
}

export default ComponenteAvo
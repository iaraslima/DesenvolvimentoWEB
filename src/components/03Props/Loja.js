import Produto from "./Produto";

const Loja = () => {
    return (
        <div>
            <h1>Supermercado Quixadá</h1>
            <hr/>
            <Produto nome="Máquina de lavar" categoria="Eletrodoméstico" valor={2300}/>
            <hr/>
            <Produto nome="Senhor dos Anéis" categoria="Livro" valor={55}/>
            <hr/>
            <Produto nome="Pizza de Calabresa" categoria="Alimentação" valor={16.99}/>

        </div>
    )
}

export default Loja
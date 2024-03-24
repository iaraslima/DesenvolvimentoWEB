import CorContexto from "./MeuContexto";

const FuncaoD = () => {
    return (
        <CorContexto.Consumer>
            {
                ({bkgD})=>
                    <div>
                        <h1 style={{backgroundColor:bkgD}}>Função D</h1>
                    </div>
            }
        </CorContexto.Consumer>

    )
}

export default FuncaoD
import CorContexto from "./MeuContexto";

const FuncaoB = () => {
    return (
        <CorContexto.Consumer>
            {
                ({bkgB})=>
                    <div>
                        <h1 style={{backgroundColor:bkgB}}>Função B</h1>
                    </div>
            }
        </CorContexto.Consumer>

    )
}

export default FuncaoB
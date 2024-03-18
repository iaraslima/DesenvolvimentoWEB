import "./estilos.css"

const MeusDados = ({nome, curso, universidade}) => {


    //let objJSON = {nome, curso, universidade}
    return (
        <div>
            <h1>{nome}</h1>
            <h1>{curso}</h1>
            <h1>{universidade}</h1>
        </div>
    )
}

export default MeusDados
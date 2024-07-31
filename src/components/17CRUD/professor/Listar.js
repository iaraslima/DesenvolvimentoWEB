import professores from "../data/db_professor";
import "../css/crud.css"

const renderizarProfessores = () => {
    return professores.map(professor => {
        return (
            <tr>
                <th scope="row">{professor.id}</th>
                <td>{professor.nome}</td>
                <td>{professor.curso}</td>
                <td>{professor.titulacao}</td>
                <td>
                    <div>
                        <button type="button" className="btn btn-secondary">Editar</button>
                        <button type="button" className="btn btn-danger">Apagar</button>
                    </div>
                </td>
            </tr>
        )
    });
}

const Listar = () => {
    return (
        <div className={"page-content"}>
            <h1>Listar Professor</h1>
            <div>
                <table className="table table-striped table-content" >
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Nome</th>
                            <th scope="col">Curso</th>
                            <th scope="col">Titulação</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderizarProfessores()}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Listar
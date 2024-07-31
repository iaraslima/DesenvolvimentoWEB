import alunos from "../data/db_aluno";
import "../css/crud.css"

const renderizarAlunos = () => {
    return alunos.map(aluno => {
        return (
            <tr>
                <th scope="row">{aluno.id}</th>
                <td>{aluno.nome}</td>
                <td>{aluno.curso}</td>
                <td>{aluno.ira}</td>
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
            <h1>Listar Aluno</h1>
            <div>
                <table className="table table-striped table-content" >
                    <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Nome</th>
                        <th scope="col">Curso</th>
                        <th scope="col">IRA</th>
                        <th scope="col"></th>
                    </tr>
                    </thead>
                    <tbody>
                    {renderizarAlunos()}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Listar
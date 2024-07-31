import {useState} from "react";

const Criar = () => {

    const [nome, setNome] = useState('');
    const [curso, setCurso] = useState('');
    const [ira, setIRA] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();

    }

    return (
        <div className="page-content">
            <h1>Criar Aluno</h1>
            <form className="form-content">
                <div className="mb-3">
                    <label className="form-label">Nome</label>
                    <input className="form-control" type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Curso</label>
                    <input className="form-control" type="text" value={curso} onChange={(e) => setCurso(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label className="form-label">IRA</label>
                    <input className="form-control" type="number" value={ira} onChange={(e) => setIRA(Number(e.target.value))} />
                </div>
                <div className="button-submit mb-3">
                    <button className="btn btn-success" type="submit">Submeter Aluno</button>
                </div>
            </form>
        </div>
    )
}

export default Criar
/* eslint-disable jsx-a11y/anchor-is-valid */
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.js"


import { Outlet, Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">

                    <a className="navbar-brand" href={"#"}>
                        CRUD
                    </a>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" href={""}>
                                    Home
                                </a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="" role="button" data-bs-toggle="dropdown"
                                   aria-expanded="false">
                                    Professor
                                </a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <Link className="dropdown-item" to={"professor/listar"}>
                                            Listar Professor
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to={"professor/criar"}>
                                            Criar Professor
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="" role="button" data-bs-toggle="dropdown"
                                   aria-expanded="false">
                                    Aluno
                                </a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <Link className="dropdown-item" to={"aluno/listar"}>
                                            Listar Aluno
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to={"aluno/criar"}>
                                            Criar Aluno
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <Outlet/>
        </div>
    );
};

export default Home
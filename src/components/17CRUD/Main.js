import {createBrowserRouter, RouterProvider} from "react-router-dom";

import Home from './Home';

import CriarAluno from './aluno/Criar';
import ListarAluno from "./aluno/Listar";
import Criar from './professor/Criar';
import Listar from "./professor/Listar";
import Editar from "./professor/Editar";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        children: [
            {
                path: "professor/listar",
                element: <Listar />,
            },
            {
                path: "professor/editar",
                element: <Editar />,
            },
            {
                path: "professor/criar",
                element: <Criar />,
            },
            {
                path: "aluno/criar",
                element: <CriarAluno/>,
            },
            {
                path: "aluno/listar",
                element: <ListarAluno/>,
            }
        ]
    },
])

const Main = () => {
    return (
        <RouterProvider router={router} />
    )
}

export default Main
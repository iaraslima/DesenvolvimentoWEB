import React from "react";
import Questao01B from "./Questao01B";

const Questao01A = () => {
    //Criação da lista de objetos
    const lista = [
        {a: 10, b: 3, c:7},
        {a: 5, b: -3, c: 9},
        {a: 1, b: 9, c: 40}
    ];

    //Retorna o JSX que Renderiza de Questao01B
    return (
        <div>
            {/*Lista é passado como prop para Questao01B*/}
            <Questao01B lista={lista} />
        </div>
    );
};

//Exportação para que Questao01A seja usada em outros arquivos
export default Questao01A;
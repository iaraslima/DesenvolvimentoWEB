//Importarei cada questão aqui e depois
// importarei Principal.js para o meu App.js

import React from "react";
import Questao01A from "./Questao01/Questao01A";
import Questao2 from "./Questao02/Questao2";
import Questao3 from "./Questao03/Questao3";
import Questao4 from "./Questao04/Questao4";

const Principal = () => {
    return (
        <div>
            <h2> Avaliação Parcial de Desenvolvimento para WEB</h2>
            <h3>Aluna: Iara
                {/*Usei &nbsp; apenas para adicionar "tab's"*/}
                &nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;
                Data: 21/08/2024</h3>
            <h5>Questão 1</h5>
            <Questao01A/>
            <hr/>
            <h5>Questão 2</h5>
            <Questao2/>
            <hr/>
            <h5>Questão 3</h5>
            <Questao3/>
            <hr/>
            <h5>Questão 4</h5>
            <Questao4/>

        </div>
    );
}

//Exportação para que Principal seja usada em outros arquivos
export default Principal;

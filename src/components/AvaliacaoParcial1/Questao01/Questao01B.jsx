import React from "react";

function Questao01B(props) {
    return (
        <div>
            {/*Iteração sobre array passado via props*/}
            {props.lista.map((item, index) => {
                //Vai encontrar o maior número entre as propriedades de cada objeto
                const maiorNumero = Math.max(item.a, item.b, item.c);
                //key é o identificador necessário para renderizar listas
                return <p key={index}>Maior número do {index + 1}º objeto: {maiorNumero}</p>;
            })}
        </div>
    );
}

//Exportação para que Questao01B seja usada em outros arquivos
export default Questao01B;
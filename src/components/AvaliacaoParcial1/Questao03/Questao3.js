import React, { useEffect, useState } from "react";

const Questao3 = () => {
    // Armazena a capital com maior população
    const [capitalComMaiorPopulacao, setCapitalComMaiorPopulacao] = useState("");
    // Armazena a capital com maior população
    const [capitalComMenorPopulacao, setCapitalComMenorPopulacao] = useState("");

    useEffect(() => {
        // Função asyn para buscar os dados
        const fetchData = async () => {
            try {
                //Requisição para a API REST
                const response = await fetch(
                    "https://restcountries.com/v3.1/region/europe?fields=capital,population"
                );
                //Conversão da resposta da API em JSON
                const data = await response.json();
                //Agora, há o mapeamento em um formato com capital e com população
                const countries = data.map((country) => ({
                    capital: country.capital[0],
                    population: country.population,
                }));
                //Inicialização e iteração para ser possível encontrar a maior e a menor população
                let maiorPopulacao = -1;
                let menorPopulacao = Infinity;
                let indiceMaiorPopulacao = -1;
                let indiceMenorPopulacao = -1;

                for (let i = 0; i < countries.length; i++) {
                    if (countries[i].population > maiorPopulacao) {
                        maiorPopulacao = countries[i].population;
                        indiceMaiorPopulacao = i;
                    }
                    if (countries[i].population < menorPopulacao) {
                        menorPopulacao = countries[i].population;
                        indiceMenorPopulacao = i;
                    }
                }
                //Depois da iteração, ocorre a atualização com as capitais encontradas
                setCapitalComMaiorPopulacao(countries[indiceMaiorPopulacao].capital);
                setCapitalComMenorPopulacao(countries[indiceMenorPopulacao].capital);
            } catch (error) {
                console.log(error);
            }
        };
        // Componente foi montado, então a função é chamada
        fetchData();
    }, []);

    return (
        <div>
            <h4>Capital europeia com maior população:  <br /> {capitalComMaiorPopulacao}</h4>
            <h4>Capital europeia com menor população: <br /> {capitalComMenorPopulacao}</h4>
        </div>
    );
};

//Exportação para que Questao3 seja usada em outros arquivos
export default Questao3;


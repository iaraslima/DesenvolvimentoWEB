import React, { useState, useEffect } from 'react';

const Questao4 = () => {
    //Armazena as capitais com menor e maior população
    const [maiorCapital, setCapitalComMaiorPopulacao] = useState('');
    const [menorCapital, setCapitalComMenorPopulacao] = useState('');

    // Simulação de requisição async que retorna uma Promise
    const fetchPromise1 = () => {
        return new Promise((response) => {
            // Retorna a Promise
            response([
                { "capital": ["Dublin"], "population": 4994724 },
                { "capital": ["Nicosia"], "population": 1207361 },
                { "capital": ["Madrid"], "population": 47351567 }
            ]);
        });
    };

    // Função async que busca e processa os dados das capitais
    const fetchCapital = async () => {
        try {
            const data = await fetchPromise1();
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
            console.error(error);
        }
    };

    useEffect(() => {
        fetchCapital();
    }, []);

    return (
        <div>
            <h4>Capital com Menor População:<br /> {menorCapital}</h4>
            <h4>Capital com Maior População:<br /> {maiorCapital}</h4>
        </div>
    );
}

//Exportação para que Questao4 seja usada em outros arquivos
export default Questao4;
import { useState } from "react";

const Questao2 = () => {
    // Controla qual imagem vai ser exibida - a do pokemon de frente ou a de costas
    const [girar, setGirar] = useState(true);

    // Função para alternar entre a imagem do pokemon de frente e a de costas
    const mudarImagem = () => {
        setGirar(imagemInicial => !imagemInicial);
    };

    return (
        <div>
            <div>
                {girar ? (
                    <img
                        // Essa é a imagemInicial mostrada na tela (o meu pokemon favorito de frente)
                        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
                        alt="Pikachu de Frente"
                    />
                ) : (
                    // O meu pokemon favorito de costas
                    <img
                        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png"
                        alt="Pikachu de Costas"
                    />
                )}

                <button
                    // Quando o botão for clicado, a imagem mudará
                    onClick={mudarImagem}
                >
                    {/*Ao apertar no botão, a mensagem dele mudará
                    conforme a posição do pokemon*/}
                    {girar ? "Quer ver minhas costas?" : "Quer ver meu rosto?"}

                </button>
            </div>
        </div>
    );
};

export default Questao2;




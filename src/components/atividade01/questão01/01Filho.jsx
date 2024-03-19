const Filho = ({altura, peso}) => {
    const calculoIMC = (altura, peso) => peso/(altura*altura)

    const mensagem = (imc) => {
        if(imc < 18) return <h3>Abaixo do peso</h3>
        else if (imc > 25) return <h3>Acima do peso</h3>
        return <h3>Peso ideal</h3>
    }

    return (
        <div>
            <h1>Cálculo do IMC: {calculoIMC(altura, peso)}</h1>
            {mensagem(calculoIMC(altura, peso))}
        </div>
    )
}
export default Filho
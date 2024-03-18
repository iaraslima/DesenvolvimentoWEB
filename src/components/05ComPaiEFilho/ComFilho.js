const ComFilho = ({mensagem, enviarMsgParaOPai}) => {

    return (
        <>
            <h2>Mensagem do Pai: {mensagem}</h2>
            <button
                onClick={
                    () => (enviarMsgParaOPai("sou adotado?"))}
            >
                Enviar mensagem para o pai
            </button>
        </>
    )
}

export default ComFilho
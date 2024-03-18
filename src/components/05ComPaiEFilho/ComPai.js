import ComFilho from "./ComFilho";

const ComPai = () => {

    function receberMsgDoFilho(mensagem) {
        alert("Recebi do meu filho: " + mensagem)
    }

    return (
        <>
            <ComFilho mensagem={"oi"} enviarMsgParaOPai={receberMsgDoFilho}/>
        </>
    )
}

export default ComPai
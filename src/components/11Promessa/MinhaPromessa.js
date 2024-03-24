import {useEffect, useState} from "react";

const MinhaPromessa = new Promise(
    (resolve, reject) => {
        //computação em 5 segundos
        setTimeout(
            () => {
                //console.log("Fui Executado")
                const meuNumero = Math.floor(Math.random() * 10) + 1
                if(meuNumero % 2 === 0) resolve("Deu certo, seu número é " + meuNumero)
                else reject("Não deu certo, seu número é " + meuNumero)
            }
            ,
            3000
        )//setTimeOut
    }//Promise
)

const ComponentePromessa = () => {
    const [resultado, setResultado] = useState()
    useEffect(
        () => {
            MinhaPromessa
                .then((value)=>(value) => setResultado(value))
                .catch((error)=>setResultado(error))
        }
        ,
        []
    );

    return(
        <>
            <h3>Promessa</h3>
            <h2>Resultado: {resultado}</h2>
        </>
    )
}

export default ComponentePromessa
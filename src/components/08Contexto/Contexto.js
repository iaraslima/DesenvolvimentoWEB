import {useContext} from "react";
import {Variavel} from "./VariavelContext";

const CompA = () => {

    const variavelDeA = "olarrr"
    return (
        <div>
            <Variavel.Provider value={variavelDeA}>
                <CompB/>
                <CompC/>
            </Variavel.Provider>
        </div>
    )
}

const CompB = () => {
    const variavel = useContext(Variavel)
    return (
        <div>
            <h3>B: {variavel}</h3>
        </div>
    )
}

const CompC = () => {
    return (
        <div>
            <CompD/>
        </div>
    )
}

const CompD = () => {
    return (
        <div>
            <CompE/>
        </div>
    )

}

const CompE = () => {
    const variavel = useContext(Variavel)
    return (
        <div>
            <h3>E: {variavel}</h3>
        </div>
    )
}

export {CompA, CompB, CompC, CompD, CompE}
import FuncaoB from "./FuncaoB";
import FuncaoC from "./FuncaoC";

import CorContexto from "./MeuContexto";

const FuncaoA = () => {

    const cores = {bkgA:"green", bkgB:"white", bkgC:"yellow", bkgD:"blue",}

    return (
        <CorContexto.Provider value = {cores}>
            <div>
                <h1 style={{backgroundColor: cores.bkgA}}>Função A</h1>
                <FuncaoB />
                <FuncaoC />
            </div>
        </CorContexto.Provider>

    )
}

export default FuncaoA
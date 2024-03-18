import Planeta from "./Planeta";
import "./estilos.css"

const SistemaSolar = () => {
    return (
        <>
            <h2>Sistema Solar</h2>
            <hr/>
            <Planeta
                nome="Mércurio"
                tipo="Rochoso"
                ordem="1"
            />
            <hr/>
            <Planeta
                nome="Vênus"
                tipo="Rochoso"
                ordem="2"
            />
            <hr/>
            <Planeta
                nome="Terra"
                tipo="Rochoso"
                ordem="3"
            />
            <hr/>
        </>
    )
}

export default SistemaSolar
import { createContext, useState } from "react"; 
import { obtenerDiferenciaYear, calcularMarca, calcularPlan, formatearDinero } from "../helpers";

const CotizadorContext = createContext()

const CotizadorProvider = ({children})=>{

    const [datos, setDatos] = useState({
        marca:"",
        year:"",
        plan:""
    })

    const [error, setError] = useState('')
    const [resultado, setResultado] = useState(0)
    const [spinner, setSpinner] = useState(false)

    const handleChangeDatos = (e) => {
        setDatos({
            ...datos,
            [e.target.name] : e.target.value
        })

    }

    const cotizarSeguro = () => {
        //base
        let resultado = 2000
        //obtener diferencia de años
        const diferencia = obtenerDiferenciaYear(datos.year)
        //restar 3% por cada año
        resultado -= ((diferencia * 3) * resultado) / 100
        console.log(resultado);
        //americado 15%
        //europeo 30%
        //asiatico 5%
        resultado *= calcularMarca(datos.marca)

        //basico 20%
        //completo50%

        resultado *= calcularPlan(datos.plan)

        //formatear dinero
        resultado = formatearDinero(resultado)

        setSpinner(true)

        setTimeout(()=>{
            setResultado(resultado)
            setSpinner(false)
        },3000)

        
    }


    return (
        <CotizadorContext.Provider 
            value={{
                datos,
                handleChangeDatos,
                error,
                setError,
                cotizarSeguro,
                spinner,
                resultado
            }}
        >
            {children}
        </CotizadorContext.Provider>
    )

}

export { CotizadorProvider}

export default CotizadorContext
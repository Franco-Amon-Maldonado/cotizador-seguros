import { Fragment} from "react";
import { MARCAS, YEARS, PLANES } from "../constants/"
import {useCotizador} from "../hooks/useCotizador"
import Error from "./Error";

function Formulario() {

    const { handleChangeDatos, datos, error, setError, cotizarSeguro} = useCotizador()

    const handleSubmit = (event) => {
        event.preventDefault()

        if(Object.values(datos).includes('')){
            setError('Todos los campos son obligatorios')
            return
        }

        setError('')
        cotizarSeguro()

    }

    return ( 
      <>

      {error && <Error/>}
        <form onSubmit={handleSubmit}>

                <div className="my-5"> 
                    <label className="block mb-3 font-bold text-gray-400 uppercase">Marca</label>
                    <select name="marca" className="w-full p-3" onChange={e => handleChangeDatos(e)} value={datos.marca}>
                        <option value="">--Seleccione Marca--</option>
                        {MARCAS.map((marca) =>(
                            <option key={marca.id} value={marca.id}>{marca.nombre}</option>
                        ))}
                    </select>
                </div>

                <div className="my-5"> 
                    <label className="block mb-3 font-bold text-gray-400 uppercase">Año</label>
                    <select name="year" className="w-full p-3" onChange={e => handleChangeDatos(e)} value={datos.year}>
                        <option value="">--Seleccione Año--</option>
                        {YEARS.map((year) =>(
                            <option key={year} value={year}>{year}</option>
                        ))}
                    </select>
                </div>

                <div className="my-5"> 
                    <label className="block mb-3 font-bold text-gray-400 uppercase">Plan</label>
                    <div className="flex gap-3">
                            {PLANES.map((plan) =>(
                              <Fragment key={plan.id}>
                                    <label>{plan.nombre}</label>
                                    <input type="radio" name="plan" value={plan.id} onChange={e => handleChangeDatos(e)}/>
                              </Fragment>
                            ))}
                    </div>
                </div>
            
                <input type="submit" 
                       value="Cotizar" 
                       className="w-full p-3 font-bold text-white bg-orange-600 hover:bg-orange-700 cursor-pointer uppercase hover:transition-colors duration-300 rounded-md"/>                
        </form>
      
      </>
     );
}

export default Formulario;
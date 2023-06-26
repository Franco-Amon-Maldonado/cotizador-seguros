import { useCotizador } from "../hooks/useCotizador";
import {MARCAS, PLANES } from "../constants"


function Resultado() {

    const { resultado, datos } = useCotizador()
    const { marca, plan, year} = datos

    const [nombreMarca] = MARCAS.filter(m => m.id === Number(marca))
    const [nombrePlan] = PLANES.filter(p => p.id === Number(plan))


    if(resultado===0) return null


    return ( 
        <div className="bg-gray-100 text-center mt-5 p-5 shadow">
            <h2 className="text-gray-500 font-black text-3xl">Resumen</h2>
            <p className="my-2">
                <span className="font-bold">Marca: {nombreMarca.nombre}</span>
            </p>
            <p className="my-2">
                <span className="font-bold">Año del auto: {year}</span>
            </p>
            <p className="my-2">
                <span className="font-bold">Plan: {nombrePlan.nombre}</span>
            </p>
            <p className="my-2 text-2xl">
                <span className="font-bold"><span className="text-orange-600">Total cotización:</span> {resultado}</span>
            </p>
        </div>
     );
}

export default Resultado;
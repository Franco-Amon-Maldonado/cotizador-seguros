import { useCallback, useRef } from "react";
import { useCotizador } from "../hooks/useCotizador";
import {MARCAS, PLANES } from "../constants"


function Resultado() {

    const { resultado, datos } = useCotizador()
    const { marca, plan, year} = datos

    //Evito el re render
    const [nombreMarca] = useCallback(MARCAS.filter(m => m.id === Number(marca)),[resultado])
    const [nombrePlan] = useCallback(PLANES.filter(p => p.id === Number(plan)),[resultado])

    //congelo el año
    const yearCurrent = useRef(year)

    if(resultado===0) return null


    return ( 
        <div className="bg-gray-100 text-center mt-5 p-5 shadow">
            <h2 className="text-gray-500 font-black text-3xl">Resumen</h2>
            <p className="my-2">
                <span className="font-bold">Marca: {nombreMarca.nombre}</span>
            </p>
            <p className="my-2">
                <span className="font-bold">Año del auto: {yearCurrent.current}</span>
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
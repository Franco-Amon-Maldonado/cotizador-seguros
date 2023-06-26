import { useCotizador } from "../hooks/useCotizador";

function Error() {
    const { error} = useCotizador()

    return ( 
        <div className="bg-red-100 p-4 text-center font-bold text-red-700">
            <p>{error}</p>
        </div>
     );
}

export default Error;
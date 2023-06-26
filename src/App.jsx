import AppSeguro from "./components/AppSeguros"
import { CotizadorProvider } from "./context/CotizadorProvider"

function App() {


  return (
  <CotizadorProvider>
      <AppSeguro/>
  </CotizadorProvider>  
    
  )
}

export default App

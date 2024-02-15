import { Route, Routes } from "react-router-dom"
import Banner from "./componentes/Banner"
import Footer from "./componentes/Footer"
import Menu from "./componentes/Menu"
import Sobre from "./Pages/Sobre"


function App() {
  
  return (

    <div>
      <Menu/>
      <Banner/>
      <Routes>
        <Route path="/sobre" element={<Sobre/>}/>
      </Routes>
      <Footer/>  

   </div>

  )

}

export default App

import { Route, Routes } from "react-router-dom"
import Banner from "./componentes/Banner"
import Footer from "./componentes/Footer"
import Menu from "./componentes/Menu"
import Sobre from "./Pages/Sobre"
import Inicio from "./Pages/Inicio"
import Contato from "./Pages/Contatos"
import Comentarios from "./Pages/Comentarios"


function App() {
  
  return (

    <div>
      <Menu/>
      <Banner/>
      <Routes>
        <Route path="/" element={<Inicio/>}/>
        <Route path="/sobre" element={<Sobre/>}/>
        <Route path="/contato" element={<Contato/>}/>
        <Route path="/comentario" element={<Comentarios/>}/>
      </Routes>
      <Footer/>  
    </div>

  )

}

export default App

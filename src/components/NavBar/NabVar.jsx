
import Navbar from "react-bootstrap/Navbar" 
import NavDropdown from "react-bootstrap/NavDropdown" 
import CartWidget from "./CartWidget"
import "./NavBar.css" 
import esla from "./assets/images/esla.jpg"




const NabVar=()=>{

  return(

    <Navbar>

        <img className="esla" src={esla}></img> 



    <Navbar.Brand></Navbar.Brand>

   

   

      <Navbar className="menu">

        

            <NavDropdown.Item href="#action3">Inicio</NavDropdown.Item>



          <NavDropdown.Item href="#action4">Indumentaria</NavDropdown.Item>

          

          <NavDropdown.Item href="#action5">Contacto</NavDropdown.Item>
          
          
          
          <CartWidget />
  
  </Navbar>

 


  </Navbar>
    

    

    
    )

}


export default NabVar

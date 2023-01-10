import "./Principal.css";
import AboutMe from "./sections/AboutMe";
import Competencias from "./sections/Competencias";
import Portafolio from "./sections/Portafolio";
import Contacto from "./sections/Contacto";

function Principal() {
  return (
    <>
      <AboutMe />
      <Competencias />
      <Portafolio />
      <Contacto />
    </>
  );
}

export default Principal;

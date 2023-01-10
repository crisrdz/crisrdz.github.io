import "./Contacto.css"
import { IoLogoLinkedin, IoLogoGithub } from "react-icons/io";

function Contacto() {
  return (
    <section id="contacto">
      <div className="content-section">
        <h3 className="title">Contacto</h3>
        <div className="grid-section">
          <div>
            <h5 className="subtitle subtitle-contact">Contáctame a través de Linkedin:</h5>
            <div className="card-contact">
              <a href="https://www.linkedin.com/in/cristofer-rodriguez-a49275254/" target="_blank"><IoLogoLinkedin /></a>
            </div>
          </div>
          <div>
            <h5 className="subtitle subtitle-contact">Ve mis proyectos en Github:</h5>
            <div className="card-contact">
              <a href="https://github.com/crisrdz" target="_blank"><IoLogoGithub /></a>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </section>
  );
}

export default Contacto
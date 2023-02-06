import { IoMdPlanet } from "react-icons/io";

function AboutMe() {
  return (
    <section id="acerca_de">
      <div className="content-section">
        <div>
          <h3 className="title">Cristofer Rodríguez Elgueta</h3>
          <h4 className="subtitle">Desarrollador Web</h4>
          <div className="grid-section">
            <p>
              Actualmente soy egresado de la carrera Analista Programador.
              Cuento con una gran capacidad de aprendizaje y resolución de
              conflictos, así como también de una rápida adaptabilidad y la
              capacidad de trabajar y aprender de forma autodidacta. Además
              poseo competencias tales como: saber trabajar adecuadamente en
              equipo, aportar en materia de ideas y soluciones, responsabilidad
              con el cumplimiento de tareas y trabajo en general, entre otras.
            </p>
            <div className="icon-planet">
              <IoMdPlanet />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;

import { IoIosCodeWorking } from "react-icons/io";

function Competencias() {
  return (
    <section id="competencias">
      <div className="content-section">
        <div>
          <h3 className="title">Competencias técnicas</h3>
          <div className="grid-section">
            <p>
            Tengo conocimientos de Front-End básico (HTML, CSS, JavaScript), aparte de poseer conocimiento básico de Git y Github. Además, actualmente estoy interesado en ser un desarrollador fullstack del stack MERN (MongoDB, Express.js, React.js, Node.js), siendo eso en lo que me estoy centrando a día de hoy. Sin embargo, también he trabajado con el framework Laravel (en una experiencia laboral pasada) y el framework Django (este último de manera autodidacta, al igual que el stack MERN).
            </p>
            <div className="icon-planet">
              <IoIosCodeWorking />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Competencias;

import "./Portafolio.css";
import Proyecto from "./portafolio/Proyecto";

function Portafolio() {
  return (
    <section id="portafolio">
      <div className="content-section">
        <div>
          <h3>Portafolio</h3>
          <div className="proyectos-grid">
            <Proyecto
              img="proyectos/logo-pokemons.png"
              url="https://crisrdz.github.io/adivinalospokemon/"
              name="¡Adivina los pokémon!"
              technologies={["React"]}
            />
            <Proyecto
              img="proyectos/logo-cat-fact.png"
              imgPosition="top"
              url="https://crisrdz.github.io/daily-cat-fact/"
              name="A daily cat fact!"
              technologies={["React"]}
            />
            <Proyecto 
              img="proyectos/logo-to-do.svg"
              url="https://to-do-project-production.up.railway.app/"
              name="To-Do App"
              technologies={["MongoDB", "Express.js", "React", "Node.js"]}
            />
            <Proyecto />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portafolio;

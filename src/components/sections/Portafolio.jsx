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
              urlProduction="https://crisrdz.github.io/adivinalospokemon/"
              urlSourceCode="https://github.com/crisrdz/adivinalospokemon"
              name="¡Adivina los pokémon!"
              technologies={["React"]}
            />
            <Proyecto
              img="proyectos/logo-cat-fact.png"
              imgPosition="top"
              urlProduction="https://crisrdz.github.io/daily-cat-fact/"
              urlSourceCode="https://github.com/crisrdz/daily-cat-fact"
              name="A daily cat fact!"
              technologies={["React"]}
            />
            <Proyecto 
              img="proyectos/logo-to-do.svg"
              urlSourceCode="https://github.com/crisrdz/to-do-project"
              name="To-Do App"
              isSourceCode={true}
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

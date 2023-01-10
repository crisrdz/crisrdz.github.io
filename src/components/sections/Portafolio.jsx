import "./Portafolio.css"
import Proyecto from './portafolio/Proyecto'

function Portafolio() {
  return (
    <section id="portafolio">
      <div className="content-section">
        <div>
          <h3>Portafolio</h3>
          <div className="proyectos-grid">
            <Proyecto img="proyectos/logo-pokemons.png" url="https://crisrdz.github.io/adivinalospokemon/" name="¡Adivina los pokémon!"/>
            <Proyecto />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portafolio
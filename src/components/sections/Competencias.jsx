import "./Competencias.css";

function Competencias() {
  return (
    <section id="competencias">
      <div className="content-section">
        <div>
          <h3>Competencias técnicas</h3>
          <div className="grid-section competencias">
            <div>
              <h4>Back-End</h4>
              <ul>
                <li>PHP con Laravel</li>
                <li>Python con Django (en aprendizaje)</li>
              </ul>
            </div>
            <div>
              <h4>Front-End</h4>
              <ul>
                <li>HTML - CSS - JavaScript</li>
                <li>React (en aprendizaje)</li>
              </ul>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </section>
  );
}

export default Competencias;

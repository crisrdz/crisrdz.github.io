import "./Proyecto.css";
import { IoIosInformationCircle, IoMdOpen, IoIosCloseCircleOutline } from "react-icons/io";
import { useState, useEffect, useRef } from "react";

function Proyecto({
  name = "Aún no es el momento...",
  img,
  imgPosition = "center",
  url,
  technologies = [],
}) {
  const [mouseOver, setMouseOver] = useState(false);
  const [imgStyle, setImgStyle] = useState({});
  const background = img
    ? `url("img/${img}") 100% ${imgPosition} /100%`
    : "radial-gradient(#252850, #101010)";
  const modal = useRef(null)

  useEffect(() => {
    setImgStyle({ background: background });
  }, []);

  const handleMouseOver = () => {
    setMouseOver(true);
    if (img) {
      setImgStyle({
        background: background,
        filter: "brightness(0.2)",
      });
    }
  };

  const handleMouseOut = () => {
    setMouseOver(false);
    if (img) {
      setImgStyle({ background: background });
    }
  };

  const openModal = () => {
    modal.current.classList.remove("modal-none")
  }

  const closeModal = () => {
    modal.current.classList.add("modal-none")
  }

  return (
    <>
      <div className="card">
        <div
          className="card-left"
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          <div className="card-img" style={imgStyle}></div>
          <p className={mouseOver ? "show-name" : ""}>
            {" "}
            {mouseOver ? name : ""}
          </p>
        </div>
        <div className="card-right">
          {url ? (
            <>
              <button onClick={openModal}>
                <IoIosInformationCircle />
              </button>
              <a href={url} target="_blank">
                <IoMdOpen />
              </a>
            </>
          ) : (
            <IoMdOpen />
          )}
        </div>
      </div>
      <div className="modal modal-none" ref={modal}>
        <button onClick={closeModal}><IoIosCloseCircleOutline /></button>
        <h4 className="modal-title">El proyecto "{name}" ha sido desarrollado con la(s) siguiente(s) tecnología(s):</h4>
        <ul className="modal-list">
          {technologies.map(tech => <li key={tech}>{tech}</li>)}
        </ul>
      </div>
    </>
  );
}

export default Proyecto;

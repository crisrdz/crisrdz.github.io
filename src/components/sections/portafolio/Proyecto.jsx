import "./Proyecto.css";
import { IoMdOpen } from "react-icons/io";
import { useState, useEffect } from 'react'

function Proyecto({ name = "Aún no es el momento...", img, imgPosition = "center", url }) {

  const [mouseOver, setMouseOver] = useState(false)
  const [imgStyle, setImgStyle] = useState({})
  const background = img ? `url("img/${img}") 100% ${imgPosition} /100%` : "radial-gradient(#252850, #101010)"

  useEffect(() => {
    setImgStyle({background: background})
  }, [])

  const handleMouseOver = () => {
    setMouseOver(true)
    if(img){
      setImgStyle({
        background: background,
        filter: "brightness(0.2)"
      })
    }
  }

  const handleMouseOut = () => {
    setMouseOver(false)
    if(img){
      setImgStyle({background: background})
    }
  }

  return (
    <div className="card">
      <div className="card-left" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} >
        <div className="card-img" style={imgStyle}>
        </div>
        <p className={mouseOver ? "show-name" : ""}> {mouseOver ? name : ""}</p>
      </div>
      <div className="card-right">
        {url ? (
          <a href={url} target="_blank">
            <IoMdOpen />
          </a>  
        ) : (
          <IoMdOpen />
        ) }
      </div>
    </div>
  );
}

export default Proyecto;

import "./Sidebar.css"
import { IoMdContact, IoIosMenu, IoIosBuild, IoIosCode, IoIosMan, IoMdStar } from "react-icons/io";

function Sidebar({toggleSidebar, sidebarToggle}) {
  function handleClick(){
    toggleSidebar()
  }

  function handleLinkClick(){
    const sound = new Audio()
    sound.src = "sounds/ButtonSound.mp3"
    sound.play()
  }

  return (
    <div className={sidebarToggle ? "sidebar sidebar-open" : "sidebar sidebar-close"} id="sidebar">
      <div className='container-sidebar-btn'>
        <button className='sidebar-btn' onClick={handleClick} id='sidebar-btn'><IoIosMenu /><span>Menú</span></button>
      </div>
      <div className='star'><IoMdStar/></div>
      <div className="sidebar-list">
        <ul>
          <li><a href="#acerca_de" onMouseDown={handleLinkClick}><IoIosMan /><span className={sidebarToggle ? "span-show" : "span-hide"}>Acerca de</span></a></li>
          <li><a href="#competencias" onMouseDown={handleLinkClick}><IoIosBuild /><span className={sidebarToggle ? "span-show" : "span-hide"}>Competencias</span></a></li>
          <li><a href="#portafolio" onMouseDown={handleLinkClick}><IoIosCode /><span className={sidebarToggle ? "span-show" : "span-hide"}>Portafolio</span></a></li>
          <li><a href="#contacto" onMouseDown={handleLinkClick}><IoMdContact/><span className={sidebarToggle ? "span-show" : "span-hide"}>Contacto</span></a></li>
        </ul>
      </div>
      <div className={sidebarToggle ? 'sidebar-footer span-show' : 'sidebar-footer span-hide'}>
        <p className="autor">Cristofer Rodríguez</p>
        <p className="license-title">Icons: </p>
        <p className="license">Project	<a href="https://ionicons.com/" target="_blank">https://ionicons.com/</a></p>
        <p className="license">License	<a href="https://github.com/ionic-team/ionicons/blob/main/LICENSE" target="_blank">MIT</a></p>
      </div>
    </div>
  )
}

export default Sidebar
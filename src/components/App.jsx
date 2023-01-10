import "./App.css";
import Principal from "./Principal";
import Sidebar from "./Sidebar";
import Stars from "./Stars";
import { useState, useEffect } from "react";

function App() {
  const [sidebarToggle, setSidebarToggle] = useState(false);

  function toggleSidebar() {
    setSidebarToggle((prevState) => !prevState);
  }

  document.body.addEventListener("click", (e)=>{
    const $sidebar = document.getElementById("sidebar")

    if(!$sidebar.contains(e.target)){
      if($sidebar.classList.contains("sidebar-open")){
        document.getElementById("sidebar-btn").click()
      }
    }
  })

  useEffect(() => {
    const sections = document.getElementsByTagName("section")
    if(sidebarToggle){
      for (const section of sections) {
        section.classList.remove("brightness-reverse")
        section.classList.add("brightness")
      }
    }else{
      for (const section of sections) {
        section.classList.remove("brightness")
        section.classList.add("brightness-reverse")
      }
    }
  }, [sidebarToggle])

  return (
    <main>
      <Sidebar toggleSidebar={toggleSidebar} sidebarToggle={sidebarToggle} />
      <Principal />
      <Stars />
    </main>
  );
}

export default App;

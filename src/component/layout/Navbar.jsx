import React from 'react'
import { GoArrowUpRight } from "react-icons/go";

function Navbar() {

  return (
    <div className='navContainer'>
        <div className='logo'>
        <img src='images/nnlogo2.png'></img>
        </div>
        <div className='navLink'>
        <a href='#about' class='hoverLink'>ABOUT ME</a>
        <a href='#skills' class='hoverLink'>SKILLS</a>
        <a href='#project' class='hoverLink'>PROJECTS</a>
        </div>
        <div className='navBtn'>
            <button>
              <div>
                <p>CONTACT</p>
              </div>
              <div className='circleNav'>
                <GoArrowUpRight size={20} className='arrowIconBtn'/>
              </div>
            </button>
        </div>
    </div>
  )
}

export default Navbar
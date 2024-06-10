import React, { useState } from 'react'
import { GoArrowUpRight } from "react-icons/go";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";

function Navbar() {
const [open,setOpen]=useState(false);
const handleClick=()=>{
  setOpen(false);
}
  return (
    <>
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
        <div className='hamburgerMenu'>
          {
            open? 
            <RxCross2 size={25} onClick={()=>setOpen(!open)}/>:
            <GiHamburgerMenu size={25} onClick={()=>setOpen(!open)}/>
          }
        </div>
        </div>
     <div className='sideBar'>
        {
          open &&(
        <div className='menuLink'>
        <a href='#about' class='hoverLink' onClick={handleClick}>ABOUT ME</a>
        <a href='#skills' class='hoverLink' onClick={handleClick}>SKILLS</a>
        <a href='#project' class='hoverLink' onClick={handleClick}>PROJECTS</a>
        </div>
            )
          }
        </div>
    
    </>
  )
}

export default Navbar
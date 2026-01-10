import React, { useEffect, useRef, useState } from 'react'
import './Navbar.css'
import logo from "../../assets/logo.svg"
import nav_underline from "../../assets/nav_underline.svg"
import menu_open from "../../assets/menu_open.svg"
import menu_close from "../../assets/menu_close.svg"

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menu,setMenu]=useState("home")
  const menuRef= useRef();

  const openMenu=()=>{
    menuRef.current.style.right="0";
  }

  const closeMenu=()=>{
    menuRef.current.style.right="-350px";
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)

    // cleanup (important)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div className={`navbar ${scrolled ? "scroll-on" : ""}`}>
      <img src={logo} alt="Logo" className='nav-logo' />
      <img src={menu_open} onClick={openMenu} alt="menu-open" className='nav-mob-open'/>

      <ul ref={menuRef} className='nav-menu'>
      <img src={menu_close} onClick={closeMenu} alt="menu-close" className='nav-mob-close' />

        <li onClick={()=>{setMenu("home")}}><a href='#home'><p>Home</p></a>{menu==="home"?<img src={nav_underline} alt="Underline" />:<></>}</li>
        <li onClick={()=>{setMenu("about")}}><a href='#about'><p>About me</p></a>{menu==="about"?<img src={nav_underline} alt="Underline" />:<></>}</li>
        <li onClick={()=>{setMenu("services")}}><a href='#services'><p>Services</p></a>{menu==="services"?<img src={nav_underline} alt="Underline" />:<></>}</li>
        <li onClick={()=>{setMenu("portfolio")}}><a href='#work'><p>Portfolio</p></a>{menu==="portfolio"?<img src={nav_underline} alt="Underline" />:<></>}</li>
        <li onClick={()=>{setMenu("contact")}}><a href='#contact'><p>Contact</p></a>{menu==="contact"?<img src={nav_underline} alt="Underline" />:<></>}</li>
      </ul>

      <div className="nav-connect"><a href='#contact'>Contact with me</a></div>
    </div>
  )
}

export default Navbar

import React, { useRef, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import underline from '../../assets/nav_underline.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'

const Navbar = () => {
  
  const [menu,setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right="0";
  }
  const closeMenu = () => {
    menuRef.current.style.right="-300px";
  }

  return (
    <div className='navbar'>
      <img src={logo} alt="" className='logo'/>
      <img src={menu_open} onClick={openMenu} alt="" className='nav-mob-open' />
      <ul ref={menuRef} className="nav-menu">
        <img src={menu_close} onClick={closeMenu} alt="" className="nav-mob-close" />
        <li>
  <AnchorLink
    className={`anchor-link ${menu === "home" ? "active" : ""}`}
    href="#home"
    offset={100}
    onClick={() => setMenu("home")}
  >
    Home
  </AnchorLink>
</li>
<li>
  <AnchorLink
    className={`anchor-link ${menu === "about" ? "active" : ""}`}
    href="#about"
    offset={50}
    onClick={() => setMenu("about")}
  >
    About Me
  </AnchorLink>
</li>
<li>
<AnchorLink
  className={`anchor-link ${menu === "skills" ? "active" : ""}`}
  href="#skills"
  offset={50}
  onClick={() => setMenu("skills")}
>
  Skills
</AnchorLink>
</li>
<li>
  <AnchorLink
    className={`anchor-link ${menu === "work" ? "active" : ""}`}
    href="#work"
    offset={50}
    onClick={() => setMenu("work")}
  >
    Experience
  </AnchorLink>
</li>
<li>
  <AnchorLink
    className={`anchor-link ${menu === "contact" ? "active" : ""}`}
    href="#contact"
    offset={50}
    onClick={() => setMenu("contact")}
  >
    Contact
  </AnchorLink>
</li>
      </ul>
      <div
  className="nav-connect"
  onClick={() => {
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }}
>
  <AnchorLink className="anchor-link" offset={50} href="#contact">
    Connect With Me
  </AnchorLink>
</div>
    </div>
  )
}

export default Navbar

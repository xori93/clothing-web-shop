import React from 'react'
import Logo from "../assests/Logo.png"

const Nav = () => {
  return (
    <nav>
      <div className="nav__container">
        <a href="/">
        <img src={Logo} alt="" className="logo" />
        </a>
        <ul className="nav__links">
          <li className="nav__list">
            <a href="/" className="nav__link">Home</a>
          </li>
          <li className="nav__list">
            <a href="/" className="nav__link">Clothing</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Nav
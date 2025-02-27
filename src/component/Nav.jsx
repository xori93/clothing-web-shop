import React from 'react'
import Logo from "../assests/Logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
          <button className="btn__menu">
            <FontAwesomeIcon icon="bars" />
          </button>
          <li className="nav__icon">
            <a href="/cart" className="nav__link">
              <FontAwesomeIcon icon="shopping-cart" />
            </a>
            <span className="cart__lenght">2</span>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Nav
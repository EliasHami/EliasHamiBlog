import React from 'react'
import "./style.css"
import { Link } from "react-router-dom"

const Nav = () => {
      return (
      <nav className="nav">
            {/* <a className="nav-brand" href="javascript:;">Accueil</a> */}
            <Link to='/' className="nav-brand">Accueil</Link>
            <ul className="nav-ul">
                  <li className="nav-li">
                        <Link to="/about" className="nav-a">A propos de moi</Link>
                  </li>
                  <li className="nav-li">
                        <Link to="/" className="nav-a">Blog</Link>
                  </li>
                  <li className="nav-li">
                        <Link to="/contact" className="nav-a">Contact</Link>
                  </li>
            </ul>
      </nav>
      )
}

export default Nav 
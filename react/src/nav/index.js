import React from 'react'
import { Link } from "react-router-dom"
import styled from "styled-components"

const NavBar = styled.nav`
font-size: 25px;
background:#10828C;
overflow: hidden;
position: sticky;
top: 0;
z-index: 999;
margin: 0;

& ul {
      display : flex;
      align-items : center;
      list-style-type: none;
}

& a {
      text-decoration: none;
      color: #f4f4f4;
      cursor: pointer;
      margin : 0 30px;
}

& a:hover {
      background: #f4f4f4;
      color: #f97300;
}

`

const Nav = () => {
      return (
      <NavBar>
            <ul>
                  {/* <li className="nav-li">
                        <Link to="/about" className="nav-a">A propos de moi</Link>
                  </li> */}
                  <li>
                        <Link to='/' className="nav-brand">Accueil</Link>
                  </li>
                  <li>
                        <Link to="/blog" className="nav-a">Blog</Link>
                  </li>
            </ul>
      </NavBar>
      )
}

export default Nav 
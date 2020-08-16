import React from 'react'
import './style.css'

const Header = () => {
      return (
            <header className="header">
                  <h1>Un freelance pour vos projet web !</h1>
                  <ul className="skills">
                        <li>
                              <h3>HTML5<span className="bar"><span className="html"></span></span></h3>
                        </li>
                        <li>
                              <h3>CSS3<span className="bar"><span className="css"></span></span></h3>
                        </li>
                        <li>
                              <h3>Javascript<span className="bar"><span className="js"></span></span></h3>
                        </li>
                        <li>
                              <h3>Angular<span className="bar"><span className="ng"></span></span></h3>
                        </li>
                  </ul>
            </header>
      )
}

export default Header;
import React from 'react'
import { SocialIcon } from 'react-social-icons'
import styled from "styled-components"

const FooterContainer = styled.footer`
display: flex;
justify-content : center;
position: absolute;
bottom: 0;
width: 100%;
height: 5rem; 
background: #ddd;
overflow : hidden;

& > div {
      display : flex;
      gap : 5px;
      align-items : center;
}

& a {
      height : 10px;
      width : 10px;
}
`

const Footer = () => {
      return (
            <FooterContainer>
                  <div>
                        <SocialIcon url="https://www.linkedin.com/in/elias-hami-a0a066101/" style={{width : 30, height : 30}}/>
                        <SocialIcon url="https://github.com/EliasHami" style={{width : 30, height : 30}}/>
                        <SocialIcon url="https://twitter.com/Eliastomere" style={{width : 30, height : 30}}/>
                        <SocialIcon url="mailto:elias.hami@outlook.com" style={{width : 30, height : 30}}/>
                  </div>
            </FooterContainer>
      )
}    

export default Footer
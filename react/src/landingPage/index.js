import React from 'react'
import './style.css'

const LandingPage = () => {
      return (
            <section className="about" id="about">
                  <div className="column">
                        <div className="column-image">
                              <img src={require('./moi.jpg')} alt="" className="image"/>
                        </div>
                        <div className="column-desc">
                              <h1>Développeur Front-End Toulouse</h1>
                              <p>
                                    Je me présente, je m'appelle Elias, j'ai 28 ans et je suis développeur Web Front-End.<br/>
                                    Je suis passionné d'informatique : Développement Web et de jeux vidéos.<br/>
                                    Je donne également des cours de web sur Superprof :)<br/>
                                    J'aime également le sport et jouer aux jeux vidéos.<br/>

                                    N’hésitez pas à me contacter ! 
                              </p>
                        </div>
                  </div>
            </section>
      )
}    

export default LandingPage
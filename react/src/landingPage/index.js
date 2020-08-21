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
                                    Je me présente, je m'appelle Elias j'ai 26 ans, j'ai eu mon bac S spécialité Physique en 2010 avec mention
                                    très
                                    bien.
                                    ....
                                    Je me présente, je m'appelle Elias j'ai 26 ans, j'ai eu mon bac S spécialité Physique en 2010 avec mention
                                    très
                                    bien.
                                    ....
                              </p>
                        </div>
                  </div>
            </section>
      )
}    

export default LandingPage
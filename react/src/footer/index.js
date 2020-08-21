import React from 'react'
import './style.css'

const Footer = () => {
      return (
            <footer className="footer">
                  <div className="container">
                        <form className="contact">
                              <div className="form-group">
                                    <label for="exampleInputEmail1">Email address</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Email"/>
                              </div>
                              <div className="form-group">
                                    <label for="exampleInputPassword1">Message</label>
                                    <textarea className="form-control" rows="3" id="exampleInputPassword1"></textarea>
                              </div>
                              <button type="submit" className="btn btn-default">Submit</button>
                        </form>
                        <p>
                              Copyright @Me
                        </p>
                  </div>
            </footer>
      )
}    

export default Footer
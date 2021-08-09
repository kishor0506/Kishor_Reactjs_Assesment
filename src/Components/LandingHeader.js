import React from 'react'
import { Link } from 'react-router-dom'

export default function LandingHeader() {
    return (
        <header id="header" className="fixed-top">
          <div className="container d-flex">
      
            <div className="logo mr-auto">
              <h1 className="text-light"><a href=""><span>STUDENT ACCOUNT</span></a></h1>
             
            </div>
      
            <nav className="nav-menu d-none d-lg-block">
              <ul>
                <li><Link to="/">Register </Link></li>

               
                <li>
                  <Link to="/view">Account details</Link>
                  </li>
                  <li>
                    <Link to="/logout">LogOut</Link>
                  </li>
      
              </ul>
            </nav>
      
         
      
          </div>
        </header>  
    )
}

import React from 'react';
import { Link } from 'react-router-dom'

function HeaderComponent (){
  return (
    // Navigation
    // ==========================================
    <div id="nav-bar">
      <nav id="tf-menu" className="navbar navbar-default navbar-fixed-top">
        <div className="container">

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav navbar-center">
              <li>
                <Link className="page-scroll navbar-style" to="/"> Home </Link>
              </li>
              <li>
                <Link className="page-scroll navbar-style" data-toggle="dropdown" to="/about"> Categories <span className="caret"></span></Link>
                <ul className="dropdown-menu">
                    <li>
                      <Link to="/data-engineering"> Data Engineering </Link>
                    </li>
                    <li>
                      <Link to="/machine-learning"> Machine Learning </Link>
                    </li>
                    <li>
                      <Link to="/data-visualization"> Data Visualization </Link>
                    </li>
                    <li>
                      <Link to="/industrialized-projects"> Industrialized Projects </Link>
                    </li>
                </ul>
              </li>
              <li>
                <Link className="page-scroll navbar-style" to="/about"> About </Link>
              </li>
              <li>
                <Link className="page-scroll navbar-style" to="/contact"> Contact </Link>
              </li>
              <li>
                <Link className="page-scroll" to="/ctr-map"> <img src="/img/worldwide.svg" width="30"/> </Link>
              </li>
            </ul>
          </div>

        </div>
      </nav>
      <hr className="vectline" align="center" width="80%" color="midnightblue" size="3"/>
    </div>
  )
}

export default HeaderComponent;

import {Link} from 'react-router-dom';
import React from 'react';

function HeaderComponent (){
  return (
    <div id="header-navbar" className="header">

      <div id="pc">
        <nav className="navbar navbar-expand-lg navbar-light">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">About</Link>
            </li>
            <li className="nav-item-pic">
              <Link to="/ctr-map" className="nav-link"><img src="/img/worldwide.svg" width="30"/></Link>
            </li>
          </ul>
        </nav>
        <hr className="vectline" align="center" width="90%" size="3"/>
      </div>

      <div id="mobile">
        <div className="pos-f-t">
          <div className="collapse" id="navbarToggleExternalContent">
            <div className="bg-light p-4">
              <h4 className="nav-title">Menu</h4>

              <div id="accordion">

                <ul className="list col-a">
                  <li>
                    <Link to="/" className="nav-link">Home</Link>
                  </li>

                  <li>
                    <Link to="/about" className="nav-link">About</Link>
                  </li>
                  <li>
                    <Link to="/ctr-map" className="nav-link"><img src="/img/worldwide.svg" width="30"/></Link>
                  </li>
                </ul>

              </div>
            </div>
          </div>

          <nav id="nav-mobile" className="navbar navbar-light bg-light">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          </nav>
        </div>
      </div>

    </div>

  )
}

export default HeaderComponent;

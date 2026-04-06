import { NavLink } from 'react-router-dom';
import React from 'react';

function HeaderComponent (){
  return (
    <div id="header-navbar" className="header header-simple">

      <div id="pc">
        <nav className="site-nav" aria-label="Navigation principale">
          <NavLink exact to="/" className="site-nav-link" activeClassName="site-nav-link--active">
            Home
          </NavLink>
          <span className="site-nav-sep" aria-hidden="true">/</span>
          <NavLink to="/ctr-map" className="site-nav-link" activeClassName="site-nav-link--active">
            Map
          </NavLink>
        </nav>
      </div>

    </div>

  )
}

export default HeaderComponent;

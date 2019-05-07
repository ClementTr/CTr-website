import React from 'react';

function HeaderComponent (){
  return (
    <div id="header-navbar">

      <div id="pc">
        <nav className="navbar navbar-expand-lg navbar-light">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/">Home</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Categories
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <a className="dropdown-item" href="/data-ops">Data OPS</a>
                <a className="dropdown-item" href="/data-science">Data Science</a>
                {/*<a className="dropdown-item" href="/data-visualization">Data Visualization</a>*/}
                <a className="dropdown-item" href="/industrialized-projects">Industrialized Projects</a>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">About</a>
            </li>
            {/*<li className="nav-item">
              <a className="nav-link" href="/contact">Contact</a>
            </li>*/}
            <li className="nav-item-pic">
              <a className="nav-link" href="/ctr-map"><img src="/img/worldwide.svg" width="30"/></a>
            </li>
          </ul>
        </nav>
        <hr className="vectline" align="center" width="80%" color="midnightblue" size="3"/>
      </div>

      <div id="mobile">
        <div className="pos-f-t">
          <div className="collapse" id="navbarToggleExternalContent">
            <div className="bg-light p-4">
              <h4 className="nav-title">Menu</h4>

              <div id="accordion">

                <ul className="list col-a">
                  <li>
                    <a href="/">Home</a>
                  </li>

                  <li>
                    <div>
                      <div id="headingTwo">
                          <a data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Categories
                          </a>
                      </div>
                      <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                        <ul className="list col-b">
                          <li>
                            <a className="dropdown-item" href="/data-ops">Data OPS</a>
                            <a className="dropdown-item" href="/data-science">Data Science</a>
                            {/*<a className="dropdown-item" href="/data-visualization">Data Visualization</a>*/}
                            <a className="dropdown-item" href="/industrialized-projects">Industrialized Projects</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>

                  <li>
                    <a href="/about">About</a>
                  </li>
                  {/*<li>
                    <a href="/contact">Contact</a>
                  </li>*/}
                  <li>
                    <a href="/ctr-map" id="navmobile-worldwide">Worldwide</a>
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

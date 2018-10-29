import React from 'react';
import logo from './logo.png'

const NavBar = () => {
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <a className="navbar-brand" href="#"><img src={logo} width="48" height="48" class="d-inline-block align-top" alt=""/></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
</button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#perfil">Perfil</a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#skills">Skills</a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#blog">Blog</a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#port">Portfólio</a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#infos">Infos</a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#contact">Contato</a>
            </li>
          </ul>
        </div>
      </nav>
    );
};

export default NavBar;
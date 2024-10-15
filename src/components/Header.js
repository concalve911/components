import React from "react";
import "../style/header.styles.scss";

export default () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          SWAPI Interface
        </a>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Characters
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Planets
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Starships
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

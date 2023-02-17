import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-black fixed-top">
      <div className="container-fluid row justify-content-between p-0 ps-2">
        {/* Logo de Star Wars */}
		<Link id="banner" to="/">
          <span className="navbar-brand mb-0 h1">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/2560px-Star_Wars_Logo.svg.png"
              width="auto"
              height="80"
            />
          </span>
        </Link>
		{/* Navbar */}
        <div className="collapse navbar-collapse col-4 justify-content-end" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/characters">
                Characters
			  </Link>
            </li>
            <li className="nav-item">
			<Link className="nav-link" to="/planets">
                Planets
			  </Link>
            </li>
			<li className="nav-item">
			<Link className="nav-link" to="/ships">
                Ships
			  </Link>
            </li>
            <li className="nav-item dropdown dropstart">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

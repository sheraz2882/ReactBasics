import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <Link to="/" className="nav-links">
          React Basics
        </Link>
        <Link to="/state-and-props" className="nav-links">
          State and Props
        </Link>
        <Link to="/lifecycle-methods" className="nav-links">
          Lifecycle Methods
        </Link>
        <Link to="/react-hooks" className="nav-links">
          React Hooks
        </Link>
        <Link to="/context-api" className="nav-links">
          Context API
        </Link>
        <Link to="/react-modal" className="nav-links">
          React Modals
        </Link>
        <Link to="/react-examples" className="nav-links">
          React Examples
        </Link>
      </nav>
    </header>
  );
}

export default Header;

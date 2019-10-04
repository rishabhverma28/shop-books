import React from "react";
import { Link } from "react-router-dom";
import "./styles.scss";

const Header: React.FC = () => {
  return (
    <div className="app-header">
      <Link to="/" className="app-header-link">
        Shop Books
      </Link>
      <Link to="/" className="app-header-link">
        Sign In
      </Link>
      <Link to="/" className="app-header-link">
        Register
      </Link>
    </div>
  );
};

export default Header;

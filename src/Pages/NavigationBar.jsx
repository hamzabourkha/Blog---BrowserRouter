import React from 'react';
import { NavLink } from 'react-router-dom';

export function NavigationBar(){
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <NavLink to="/" className="navbar-brand"></NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
        <NavLink to="/blog" className="nav-link">Blog</NavLink>
        </li>
        <li className="nav-item">
        <NavLink to="/contact" className="nav-link">Contact</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
    
  );
};


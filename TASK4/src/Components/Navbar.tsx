import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='container'>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src= "https://stargleameducation.net/wp-content/uploads/2020/12/STARGLEAM-2-e1615139643834.png" alt="Bootstrap" width="150" height="100"/>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About Us</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/courses">Courses</Link>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Free 11+ Courses
                </a>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item nav-link" to="/english">English Practise Papers</Link></li>
                  <li><Link className="dropdown-item nav-link" to="/verbal">Verbal Reasoning Papers</Link></li>
                  <li><Link className="dropdown-item nav-link" to="/nonverbal">Non-verbal Reasoning Papers</Link></li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact Us</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/timer">Timer</Link>
              </li>
            </ul>
            
          </div>
        </div>
      </nav>
    </div>
  );
}
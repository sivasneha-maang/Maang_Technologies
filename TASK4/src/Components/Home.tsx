import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
      <img src="https://stargleameducation.net/wp-content/uploads/2021/01/slider-1.png" alt="Example Image" className="image"/>
      <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>Company</h5>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
              <li><Link to="/careers">Careers</Link></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Legal</h5>
            <ul>
              <li><Link to="/privacy">Privacy Policy</Link></li>
              <li><Link to="/terms">Terms of Service</Link></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Subscribe</h5>
            <form>
              <input type="email" placeholder="Enter your email" />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
    </div>
    </>
      
    
    
  )
}
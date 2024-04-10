import React from 'react';
import '../Navbar.css';

export default function Navbar() {
    return (
        <>
            <nav className='navbar'>
                <div className='menu-icons'>
                    <i class="fa-brands fa-facebook-f"></i>
                    <i class="fa-brands fa-linkedin-in"></i>
                </div>
                <div className='menu-icons'>
                    <i class="fa-light fa-phone"></i><span>(+44)7726018288</span>
                    <i class="fa-regular fa-envelope"></i><span>info@stargleameducation.com</span>
                </div>
            </nav>
            
        </>
    )
}
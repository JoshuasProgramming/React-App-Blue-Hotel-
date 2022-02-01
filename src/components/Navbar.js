import React from 'react';
import '../styles/Navbar.css';

function NavBar(){
    return(
        <section className='top'>
            <header>
                <p><a href="index.html" className="landing-direct">Blue Hotel</a></p>
                    <ul class="navbar">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Visit</a></li>
                        <li><a href="#">Locations</a></li>
                        <li><a href="#">Booking</a></li>
                        <li><a href="#">Gallery</a></li>
                        <li><a href="#">Social media</a></li>
                    </ul>
            </header>
        </section>
    );
}

export default NavBar;
import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className='header'>
            <nav className='nav'>
                <Link to="/" className='nav-links'>React Basics</Link>
                <Link to="/react-examples" className='nav-links'>React Examples</Link>
            </nav>
        </header>
    );
}

export default Header;
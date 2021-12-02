import React, {useState} from 'react';
import {ReactComponent as PawSVG} from '../svgs/pawprint.svg'
import { Link } from 'react-scroll';
import './Navbar.css';

function Navbar() {
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo">
                        SOS PATINHAS POA <PawSVG />
                    </Link>
                </div>
            </nav>
        </>
    )
}

export default Navbar;




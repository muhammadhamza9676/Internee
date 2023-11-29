import React from 'react'
import { Link, useLocation} from 'react-router-dom'
import navIcon from './images/Logo.png';

function Navbar() {
    let location = useLocation();
    return (
        <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light font-weight-bold" style={{ backgroundColor: 'white'}}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    <img src={navIcon} style={{width:"200px", height:"50px" }} className="d-inline-block align-top" alt="Logo"/>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                     <ul className="navbar-nav mx-auto pr-5"> 
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === '/' ? "active" : ""}`} aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === '/about' ? "active" : ""}`} to="/about">About Us</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === '/internships' ? "active" : ""}`} to="/internships">Internships</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === '/contact' ? "active" : ""}`} to="/contact"> Contact</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === '/lms' ? "active" : ""}`} to="/lms"> LMS </Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === '/jobportal' ? "active" : ""}`} to="/jobportal"> Job Portal</Link>
                        </li>
                    </ul>
                    <a href='www.internee.pk' type="button" className="btn btn-success rounded-0 my-2 my-sm-0 mr-3 text-white">Internee Portal</a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
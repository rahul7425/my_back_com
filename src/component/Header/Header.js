import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Contact from '../Contact';
import './Header.css';

export default function Header() {
    return (
        <>

            <section className=" top-txt ">
                <div className="head container ">
                    <div className="head-txt ">
                        <p>Free shipping, 30-day return or refund guarantee.</p>
                    </div>
                    <div className='header-search'>
                        <input class="form-control" list="datalistOptions" id="exampleDataList" placeholder="search products..." />
                    </div>
                    <div className="sing_in_up ">
                        <Link href="# ">SIGN IN</Link>
                        <Link href="# ">SIGN UP</Link>
                    </div>
                </div>
            </section>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container navbar-container">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav m-auto mb-2 mb-lg-0 menu-items">
                            <li className="nav-item">
                                <Link to='/' className="nav-link active" aria-current="page">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/about' className="nav-link" href="#">Electronics</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/accessories' className="nav-link" href="#">Accessories</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='#' className="nav-link" href="#">Computers</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='#' className="nav-link" href="#">Sports</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/contact' className="nav-link" href="#">Contact</Link>
                            </li>
                        </ul>
                        <div className='header-icons'>
                        <ul>
                            <li>
                                <Link><i class="bi bi-cart"></i></Link>
                                <Link><i class="bi bi-heart"></i></Link>
                            </li>
                        </ul>
                    </div>
                    </div>
                    
                </div>
            </nav>
        </>
    )
}

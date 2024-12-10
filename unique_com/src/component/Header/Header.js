import React, { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Contact from '../Contact';
import './Header.css';
import Login from '../Login';
import MyOrder from '../MyOrder/MyOrder';
import Checkout from '../MyOrder/Checkout';
import Wishlist from '../product/Wishlist';
export default function Header() {

    const [activeButton, setActiveButton] = useState(null);

    const handleButtonClick = (buttonName) => {
        setActiveButton(buttonName);
    };


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
                        <Link to="">SIGN IN</Link>
                        <Link href="# ">SIGN UP</Link>
                        {/* <button
                            className={activeButton === "button1" ? "active" : ""}
                            onClick={() => handleButtonClick("button1")}
                        >
                            Button 1
                        </button>
                        <button
                            className={activeButton === "button2" ? "active" : ""}
                            onClick={() => handleButtonClick("button2")}
                        >
                            Button 2
                        </button> */}
                    </div>
                </div>
            </section>
            <nav className="navbar navbar-expand-lg navbar-light bg-light header-section">
                <div className="container navbar-container">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav m-auto mb-2 mb-lg-0 menu-items">
                            <li className="nav-item">
                                <a class="btn all-categorie-btn" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
                                    All
                                </a>
                            </li>
                            <li className="nav-item">
                                <Link to='/' className="nav-link active" aria-current="page">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/electronics' className="nav-link" href="#">Electronics</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/accessories' className="nav-link" href="#">Accessories</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='#' className="nav-link" href="#">Categorie</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='#' className="nav-link" href="#">Sports</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/contact' className="nav-link" href="#">Contact</Link>
                            </li>
                        </ul>

                        <div className='header-icons'>
                            <ul className='my-0'>
                                <li>
                                    <div class="dropdown me-1">
                                        <Link className='position-relative' id="dropdownMenuOffset" data-bs-toggle="dropdown" style={{ paddingBottom: "7px", }}><i class="bi bi-cart me-2" style={{ fontSize: "20px" }}>
                                            <span class="position-absolute top-0 start-80 translate-middle badge rounded-pill bg-dark" style={{ fontSize: "8px" }}>
                                                9
                                                <span class="visually-hidden">unread messages</span>
                                            </span></i></Link>
                                        <div>

                                        </div>
                                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuOffset">
                                            <div className='cart-heading px-3 pt-2'>
                                                <h3>My Cart</h3>
                                            </div>
                                            <li class="dropdown-item product-list" style={{ maxHeight: "52vh", overflowY: "auto" }}>

                                                <div className='cart-products mt-4'>
                                                    <div className='row'>
                                                        <div className='col-md-3'>
                                                            <div className='img-bg rounded'>
                                                                <img className='img-fluid' src='./images/fx-1.png' />
                                                            </div>
                                                        </div>
                                                        <div className='col-md-9'>
                                                            <div className='product-description'>
                                                                <Link>
                                                                    <h5>Rey Nylon Backpack <button className='price-btn float-end'>75$</button></h5>
                                                                </Link>

                                                                <p>Natura <span>| XL</span></p>
                                                                <div class="d-flex flex-1 items-end justify-content-between text-sm">
                                                                    <p class="text-gray-500 dark:text-slate-400">Qty 1</p>
                                                                    <div class="flex">
                                                                        <button type="button" class="item-remove-btn">Remove</button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                                <div className='cart-products mt-4'>
                                                    <div className='row'>
                                                        <div className='col-md-3'>
                                                            <div className='img-bg rounded'>
                                                                <img className='img-fluid' src='./images/fx-2.png' />
                                                            </div>
                                                        </div>
                                                        <div className='col-md-9'>
                                                            <div className='product-description'>
                                                                <Link>
                                                                    <h5>Rey Nylon Backpack <button className='price-btn float-end'>75$</button></h5>
                                                                </Link>

                                                                <p>Natura <span>| XL</span></p>
                                                                <div class="d-flex flex-1 items-end justify-content-between text-sm">
                                                                    <p class="text-gray-500 dark:text-slate-400">Qty 1</p>
                                                                    <div class="flex">
                                                                        <button type="button" class="item-remove-btn">Remove</button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                                <div className='cart-products mt-4'>
                                                    <div className='row'>
                                                        <div className='col-md-3'>
                                                            <div className='img-bg rounded'>
                                                                <img className='img-fluid' src='./images/fx-3.png' />
                                                            </div>
                                                        </div>
                                                        <div className='col-md-9'>
                                                            <div className='product-description'>
                                                                <Link>
                                                                    <h5>Rey Nylon Backpack <button className='price-btn float-end'>75$</button></h5>
                                                                </Link>

                                                                <p>Natura <span>| XL</span></p>
                                                                <div class="d-flex flex-1 items-end justify-content-between text-sm">
                                                                    <p class="text-gray-500 dark:text-slate-400">Qty 1</p>
                                                                    <div class="flex">
                                                                        <button type="button" class="item-remove-btn">Remove</button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </li>
                                            <li class="dropdown-item">
                                                <p style={{ marginBottom: "0px", fontWeight: "600" }}>Subtotal <span className='float-end'>$299.00</span></p>
                                                <span style={{ fontSize: '12px', color: "#6e7d92" }}>Shipping and taxes calculated at checkout.</span>
                                            </li>
                                            <li class="dropdown-item border-top pt-3">
                                                <Link className='view-cartBtn float-start' to={"/myorder"}>View Cart</Link>
                                                <Link className='checkoutBtn float-end' to={"/checkout"}>Checkout</Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <Link to={"wishlist"} style={{ marginTop: "1px" }}><i class="bi bi-heart" style={{ fontSize: "20px" }}>
                                        <span class="position-absolute top-30 start-80 translate-middle badge rounded-pill bg-dark" style={{ fontSize: "8px", top: "17%" }}>
                                            9
                                            <span class="visually-hidden">unread messages</span>
                                        </span></i></Link>

                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </nav>
            <div class="offcanvas offcanvas-start all-categories" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasExampleLabel">Digital Content and Devices</h5>
                    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close" style={{ fontSize: "12px" }}></button>
                </div>
                <div class="offcanvas-body pt-0">
                    <div class="accordion accordion-flush" id="accordionFlushExample">
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="flush-headingOne">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                    Electronics
                                </button>
                            </h2>
                            <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">
                                    <ul>
                                        <li>
                                            <a data-replace="Laptops"><span>Laptops</span></a>
                                        </li>
                                        <li>
                                            <a data-replace="Computers"><span>Computers</span></a>
                                        </li>
                                        <li>
                                            <a data-replace="Smart Phones"><span>Smart Phones</span></a>
                                        </li>
                                        <li>
                                            <a data-replace="Wireless Charger"><span>Wireless Charger</span></a>
                                        </li>
                                        <li>
                                            <a data-replace="Air Buds"><span>Air Buds</span></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="flush-headingTwo">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                    Home & Kitchen
                                </button>
                            </h2>
                            <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">
                                    <ul>
                                        <li>
                                            <a data-replace="Kitchen & Dining"><span>Kitchen & Dining</span></a>
                                        </li>
                                        <li>
                                            <a data-replace="Home Decor"><span>Home Decor</span></a>
                                        </li>
                                        <li>
                                            <a data-replace="Furniture"><span>Furniture</span></a>
                                        </li>
                                        <li>
                                            <a data-replace="Kitchen Storage & Containers"><span>Kitchen Storage & Containers</span></a>
                                        </li>
                                        <li>
                                            <a data-replace="Bedroom Linen"><span>Bedroom Linen</span></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="flush-headingThree">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                    Sports & Fitness
                                </button>
                            </h2>
                            <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">
                                    <ul>
                                        <li>
                                            <a data-replace="Cricket"><span>Cricket</span></a>
                                        </li>
                                        <li>
                                            <a data-replace="Badminton"><span>Badminton</span></a>
                                        </li>
                                        <li>
                                            <a data-replace="Fitness Accessories"><span>Fitness Accessories</span></a>
                                        </li>
                                        <li>
                                            <a data-replace="Cardio Equipment"><span>Cardio Equipment</span></a>
                                        </li>
                                        <li>
                                            <a data-replace="Sports Collectibles"><span>Sports Collectibles</span></a>
                                        </li>
                                        <li>
                                            <a data-replace="All Exercise & Fitness"><span>All Exercise & Fitness</span></a>
                                        </li>
                                        <li>
                                            <a data-replace="All Exercise & Fitness"><span>All Exercise & Fitness</span></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

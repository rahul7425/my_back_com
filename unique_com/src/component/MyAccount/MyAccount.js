import React from 'react'
import { Link } from 'react-router-dom'
import './MyAccount.css'



function MyAccount() {
    return (
        <>
            <div class="container1">
                <div className='border-top border-bottom mt-5'>
                    <div class=" mt-3 scroll">
                        <ul class=" nav  navbar-list nav_color" id="myTab" role="tablist">
                            <li className="nav-item overflow-hidden" role="presentation">
                                <a class="nav-link active nav_color" aria-current="page" id="account-tab" data-bs-toggle="tab" data-bs-target="#account" type="button" role="tab" aria-controls="home" aria-selected="true">Account info</a>
                            </li>
                            <li class="nav-item  overflow-hidden" role="presentation">
                                <a class="nav-link nav_color" href="#" id="save_list-tab" data-bs-toggle="tab" data-bs-target="#savelist" type="button" role="tab" aria-controls="home" aria-selected="false">Save lists</a>
                            </li>
                            <li class="nav-item  overflow-hidden" role="presentation">
                                <a class="nav-link nav_color" href="#" id="order-tab" data-bs-toggle="tab" data-bs-target="#myorder" type="button" role="tab" aria-controls="home" aria-selected="false">My order</a>
                            </li>
                            <li class="nav-item  overflow-hidden" role="presentation">
                                <a class="nav-link nav_color" href="#" id="password-tab" data-bs-toggle="tab" data-bs-target="#password" type="button" role="tab" aria-controls="home" aria-selected="false">Change password</a>
                            </li>
                            <li class="nav-item  overflow-hidden" role="presentation">
                                <a class="nav-link nav_color" href="#" id="bill-tab" data-bs-toggle="tab" data-bs-target="#billing" type="button" role="tab" aria-controls="home" aria-selected="false">Change Billing</a>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>



            <div class="tab-content" id="myTabContent">
                <div class="tab-pane fade show active" id='account' role="tabpanel" aria-labelledby="home-tab">
                    <div class="container mx-auto col-lg-6 ">
                        <div class="container2 mt-5 p-3 text-start ">
                            <h1>Account infomation</h1>
                            <div class="img_circle rounded-circle mt-5 p-3">
                                <img src="" alt="user-img"></img>
                            </div>

                            <form>
                                <div class="mb-3 mt-4">
                                    <label for="InputEmail1" class="form-label">Full name</label>
                                    <input type="text" class="form-control" id="name" aria-describedby="emailHelp" />
                                </div>
                                <div class="mb-3">
                                    <label for="InputEmail1" class="form-label">Email address</label>
                                    <input type="email" class="form-control" id="InputEmail1" aria-describedby="emailHelp" />
                                </div>
                                <div class="mb-3">
                                    <label for="InputPassword1" class="form-label">Date of birth</label>
                                    <input type="date" class="form-control" id="account-date" />
                                </div>
                                <div class="mb-3">
                                    <label for="InputPassword1" class="form-label">Address</label>
                                    <input type="text" class="form-control" id="account-address" />
                                </div>
                                <div class="mb-3">
                                    <label for="InputPassword1" class="form-label">Gender</label>
                                    <select class="form-select" aria-label="Default select example">
                                        <option value="1">Male</option>
                                        <option value="2">Female</option>
                                        <option value="3">Other</option>
                                    </select>
                                </div>
                                <div class="mb-3">
                                    <label for="InputPassword1" class="form-label">Phone number</label>
                                    <input type="tel" class="form-control" id="account-phone" />
                                </div>
                                <div class="text mb-3">
                                    <label for="InputPassword1" class="form-label">About you</label>
                                    <input type="text" class="form-control" id="account-about" />
                                </div>
                                <div class="d-grid gap-2 col-lg-6 mx-auto">
                                    <button type="submit" class="btn btn-dark rounded-pill">Update account</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="tab-pane fade" id='savelist' role="tabpanel" aria-labelledby="profile-tab">
                    {/* ----------------------------------------save lists----------------------------------- */}

                    <div class="container save-list-products col-lg-10 mb-5 mt-5 gy-5" >
                        <div class="container2 mt-5 p-3 text-start">
                            <h2 class="discover-text semiBold">List of saved products<span class="">. </span><span class="text-neutral-500 dark:text-neutral-400">Good things are waiting for you</span></h2>
                        </div>
                        <div className='row'>
                            <div className='col-md-3 col-sm-6'>
                                <div className='fx-product'>
                                    <div class="card border-0">
                                        <div className='img-bg'>
                                            <img src="/images/fx-2.png" class="card-img-top" alt="..." />
                                            <div className='product-size btns'>
                                                <ul className='d-flex flex-direction-row justify-content-between'>
                                                    <li><a className='btn cart-btn'><i class="bi bi-cart me-1"></i> Add To Bag</a></li>
                                                    <li><Link to={"/product"} className='btn view-btn'><i class="bi bi-arrows-fullscreen me-1"></i> Quick View</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="card-body">
                                            <ul className='d-flex flex-direction-row justify-content-between'>
                                                <li className='rounded-circle'><a className='product-color'></a></li>
                                                <li className='rounded-circle'><a className='product-color'></a></li>
                                                <li className='rounded-circle'><a className='product-color'></a></li>
                                                <li className='rounded-circle'><a className='product-color'></a></li>
                                                <li className='rounded-circle'><a className='product-color'></a></li>
                                            </ul>
                                            <h5 class="card-title mt-4">Xiaomi Pad 6</h5>
                                            <p class="card-text product-mini-details mb-1">Redmi Pad SE| All Day Battery</p>
                                            <p class="card-text product-rate">₹1,699 <span style={{ fontSize: "10px", color: " #9d9d9d", }}>M.R.P: <span style={{ textDecorationLine: "line-through" }}>₹4,500</span> </span> <span style={{ fontSize: "12px" }}>(62% off)</span><br />
                                                <span style={{ fontSize: "12px", color: "rgb(123 121 121)", }}>Save 1% with coupon</span></p>
                                            <div className='d-flex justify-content-between align-items-baseline'>
                                                <p className='mb-0' style={{ fontSize: "10px" }}>900+ bought in past month</p>
                                                <div className='reviews'>
                                                    <i class="bi bi-star-fill me-1"></i>
                                                    <span>
                                                        4.9 (89 reviews)
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-3 col-sm-6 mb-5'>
                                <div className='fx-product'>
                                    <div class="card border-0">
                                        <div className='img-bg'>
                                            <img src="/images/fx-2.png" class="card-img-top" alt="..." />
                                            <div className='product-size btns'>
                                                <ul className='d-flex flex-direction-row justify-content-between'>
                                                    <li><a className='btn cart-btn'><i class="bi bi-cart me-1"></i> Add To Bag</a></li>
                                                    <li><Link to={"/product"} className='btn view-btn'><i class="bi bi-arrows-fullscreen me-1"></i> Quick View</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="card-body">
                                            <ul className='d-flex flex-direction-row justify-content-between'>
                                                <li className='rounded-circle'><a className='product-color'></a></li>
                                                <li className='rounded-circle'><a className='product-color'></a></li>
                                                <li className='rounded-circle'><a className='product-color'></a></li>
                                                <li className='rounded-circle'><a className='product-color'></a></li>
                                                <li className='rounded-circle'><a className='product-color'></a></li>
                                            </ul>
                                            <h5 class="card-title mt-4">Xiaomi Pad 6</h5>
                                            <p class="card-text product-mini-details mb-1">Redmi Pad SE| All Day Battery</p>
                                            <p class="card-text product-rate">₹1,699 <span style={{ fontSize: "10px", color: " #9d9d9d", }}>M.R.P:  <span style={{ textDecorationLine: "line-through" }}>₹4,500</span></span> <span style={{ fontSize: "12px" }}>(62% off)</span><br />
                                                <span style={{ fontSize: "12px", color: "rgb(123 121 121)", }}>Save 1% with coupon</span></p>
                                            <div className='d-flex justify-content-between align-items-baseline'>
                                                <p className='mb-0' style={{ fontSize: "10px" }}>900+ bought in past month</p>
                                                {/* <a href="#" class="rate-btn">89$</a> */}
                                                <div className='reviews'>
                                                    <i class="bi bi-star-fill me-1"></i>
                                                    <span>
                                                        4.9 (89 reviews)
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-3 col-sm-6 mb-5'>
                                <div className='fx-product'>
                                    <div class="card border-0">
                                        <div className='img-bg'>
                                            <img src="/images/fx-2.png" class="card-img-top" alt="..." />
                                            <div className='product-size btns'>
                                                <ul className='d-flex flex-direction-row justify-content-between'>
                                                    <li><a className='btn cart-btn'><i class="bi bi-cart me-1"></i> Add To Bag</a></li>
                                                    <li><Link to={"/product"} className='btn view-btn'><i class="bi bi-arrows-fullscreen me-1"></i> Quick View</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="card-body">
                                            <ul className='d-flex flex-direction-row justify-content-between'>
                                                <li className='rounded-circle'><a className='product-color'></a></li>
                                                <li className='rounded-circle'><a className='product-color'></a></li>
                                                <li className='rounded-circle'><a className='product-color'></a></li>
                                                <li className='rounded-circle'><a className='product-color'></a></li>
                                                <li className='rounded-circle'><a className='product-color'></a></li>
                                            </ul>
                                            <h5 class="card-title mt-4">Xiaomi Pad 6</h5>
                                            <p class="card-text product-mini-details mb-1">Redmi Pad SE| All Day Battery</p>
                                            <p class="card-text product-rate">₹1,699 <span style={{ fontSize: "10px", color: " #9d9d9d", }}>M.R.P:  <span style={{ textDecorationLine: "line-through" }}>₹4,500</span> </span> <span style={{ fontSize: "12px" }}>(62% off)</span><br />
                                                <span style={{ fontSize: "12px", color: "rgb(123 121 121)", }}>Save 1% with coupon</span></p>
                                            <div className='d-flex justify-content-between align-items-baseline'>
                                                <p className='mb-0' style={{ fontSize: "10px" }}>900+ bought in past month</p>
                                                {/* <a href="#" class="rate-btn">89$</a> */}
                                                <div className='reviews'>
                                                    <i class="bi bi-star-fill me-1"></i>
                                                    <span>
                                                        4.9 (89 reviews)
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-3 col-sm-6 mb-5'>
                                <div className='fx-product'>
                                    <div class="card border-0">
                                        <div className='img-bg'>
                                            <img src="/images/fx-2.png" class="card-img-top" alt="..." />
                                            <div className='product-size btns'>
                                                <ul className='d-flex flex-direction-row justify-content-between'>
                                                    <li><a className='btn cart-btn'><i class="bi bi-cart me-1"></i> Add To Bag</a></li>
                                                    <li><Link to={"/product"} className='btn view-btn'><i class="bi bi-arrows-fullscreen me-1"></i> Quick View</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="card-body">
                                            <ul className='d-flex flex-direction-row justify-content-between'>
                                                <li className='rounded-circle'><a className='product-color'></a></li>
                                                <li className='rounded-circle'><a className='product-color'></a></li>
                                                <li className='rounded-circle'><a className='product-color'></a></li>
                                                <li className='rounded-circle'><a className='product-color'></a></li>
                                                <li className='rounded-circle'><a className='product-color'></a></li>
                                            </ul>
                                            <h5 class="card-title mt-4">Xiaomi Pad 6</h5>
                                            <p class="card-text product-mini-details mb-1">Redmi Pad SE| All Day Battery</p>
                                            <p class="card-text product-rate">₹1,699 <span style={{ fontSize: "10px", color: " #9d9d9d", }}>M.R.P:  <span style={{ textDecorationLine: "line-through" }}>₹4,500</span></span> <span style={{ fontSize: "12px" }}>(62% off)</span><br />
                                                <span style={{ fontSize: "12px", color: "rgb(123 121 121)", }}>Save 1% with coupon</span></p>
                                            <div className='d-flex justify-content-between align-items-baseline'>
                                                <p className='mb-0' style={{ fontSize: "10px" }}>900+ bought in past month</p>
                                                {/* <a href="#" class="rate-btn">89$</a> */}
                                                <div className='reviews'>
                                                    <i class="bi bi-star-fill me-1"></i>
                                                    <span>
                                                        4.9 (89 reviews)
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-4 col-md-6 col-sm-12 mb-5'>
                                <div class="card box">
                                    <div className="img-shape">
                                        <img src="./images/fx-1.png" class="card-img-top" alt="..." />
                                        <div className='layer position-relative d-flex justify-content-center'>
                                            <button type="button" class="btn btn-light">S</button>
                                            <button type="button" class="btn btn-light">M</button>
                                            <button type="button" class="btn btn-light">L</button>
                                            <button type="button" class="btn btn-light">XL</button>
                                            <button type="button" class="btn btn-light">XXL</button>
                                        </div>
                                    </div>
                                    <div class="card-body">
                                        <h5 class="card-title">Card title</h5>
                                        <p class="card-text">text here!!!!</p>
                                        <div class="row bt-size">
                                            <div className='col-4'>
                                                <button type="button" class="btn btn-outline-success border border-3 border-success"><p>1000/Rs</p></button>
                                            </div>
                                            <p class="col-8  text-end text-size"><i class="fa-solid fa-star text-warning"></i>3.4<br></br>(98 reviews)</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-4 col-md-6 col-sm-12 mb-5'>
                                <div class="card box">
                                    <div className="img-shape">
                                        <img src="./images/fx-1.png" class="card-img-top" alt="..." />
                                        <div className='layer position-relative d-flex justify-content-center'>
                                            <button type="button" class="btn btn-light">S</button>
                                            <button type="button" class="btn btn-light">M</button>
                                            <button type="button" class="btn btn-light">L</button>
                                            <button type="button" class="btn btn-light">XL</button>
                                            <button type="button" class="btn btn-light">XXL</button>
                                        </div>
                                    </div>
                                    <div class="card-body">
                                        <h5 class="card-title">Card title</h5>
                                        <p class="card-text">text here!!!!</p>
                                        <div class="row bt-size">
                                            <div className='col-4'>
                                                <button type="button" class="btn btn-outline-success border border-3 border-success"><p>1000/Rs</p></button>
                                            </div>
                                            <p class="col-8 text-end text-size"><i class="fa-solid fa-star text-warning"></i>3.4<br></br>(98 reviews)</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tab-pane fade" id='myorder' role="tabpanel" aria-labelledby="contact-tab">

                    {/* ---------------------------my order--------------------------- */}
                    <div class="container acc-grey col-lg-8 mb-5" >
                        <div class="container2 mt-5 p-3 text-start ">
                            <h1>My Order</h1>
                        </div>

                        <div class="accordion order-list" id="accordionExample">
                            <div class="accordion-item">
                                <h2 class="accordion-header border">
                                    <button class="accordion-button text-black pe-0" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne">
                                        <div className='row w-100'>
                                            <div className='col-md-6'>
                                                <h4>Order ID: 23931</h4>
                                            </div>
                                            <div className='col-md-6'>
                                                <div className='order-btn text-end'>
                                                    <button className='order-invoice'><i class="bi bi-file-earmark-text"></i>Invoice</button>
                                                    <button className='btn btn-primary track-order'><i class="bi bi-geo"></i>Track order</button>

                                                </div>

                                            </div>
                                            <div className='order-date'>
                                                <p>order Date: <span>Feb 16, 2022  |  </span><span><i class="bi bi-airplane me-1"></i>Estimated delivery: May 14, 2022</span></p>
                                            </div>
                                        </div>

                                    </button>
                                </h2>
                                <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <div class="accordion accordion-flush" id="accordionFlushExample">
                                            <div class="accordion-item">
                                                <h2 class="accordion-header" id="flush-headingOne">
                                                    <button class="accordion-button d-block collapsed border-bottom" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                                        <div className='row'>
                                                            <div className='col-md-2'>
                                                                <div className='order-list-img'>
                                                                    <img className='img-fluid' src='./images/fx-1.png' width={"65px"} />
                                                                </div>
                                                            </div>
                                                            <div className='col-md-5 pt-3 order-description'>
                                                                <h4>MacBook</h4>
                                                                <p>Space Grey | 32GB | 1TB</p>

                                                            </div>
                                                            <div className='col-md-5 pt-3 order-description text-end'>
                                                                <h4 style={{ fontWeight: '700' }}>$234</h4>
                                                                <p>Qty1</p>
                                                            </div>

                                                        </div>
                                                    </button>

                                                </h2>
                                                <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                                    <div class="accordion-body">

                                                        <div className='row'>
                                                            <div className='col-md-6'>
                                                                <div className='payment-description'>
                                                                    <h4>Payment</h4>
                                                                    <h6 className='mt-2'>Visa***23 <span class="badge bg-secondary">Visa</span></h6>
                                                                </div>
                                                            </div>
                                                            <div className='col-md-6'>
                                                                <div className='payment-description'>
                                                                    <h4>Delivery</h4>
                                                                    <p>Address</p>
                                                                    <h6 style={{ lineHeight: "1.7" }}>
                                                                        123 Civil Lines Metro Station OK Apt. <br />
                                                                        jaipur Rajasthan <br />
                                                                        1234-45-6550
                                                                    </h6>
                                                                </div>

                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accordion-item">
                                                <h2 class="accordion-header" id="flush-headingTwo">
                                                    <button class="accordion-button d-block border-bottom collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                                        <div className='row'>
                                                            <div className='col-md-2'>
                                                                <div className='order-list-img'>
                                                                    <img className='img-fluid' src='./images/fx-1.png' width={"65px"} />
                                                                </div>
                                                            </div>
                                                            <div className='col-md-5 pt-3 order-description'>
                                                                <h4>MacBook</h4>
                                                                <p>Space Grey | 32GB | 1TB</p>

                                                            </div>
                                                            <div className='col-md-5 pt-3 order-description text-end'>
                                                                <h4 style={{ fontWeight: '700' }}>$234</h4>
                                                                <p>Qty1</p>
                                                            </div>

                                                        </div>
                                                    </button>
                                                </h2>
                                                <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                                    <div class="accordion-body">
                                                        <div className='row'>
                                                            <div className='col-md-6'>
                                                                <div className='payment-description'>
                                                                    <h4>Payment</h4>
                                                                    <h6 className='mt-2'>Visa***23 <span class="badge bg-secondary">Visa</span></h6>
                                                                </div>
                                                            </div>
                                                            <div className='col-md-6'>
                                                                <div className='payment-description'>
                                                                    <h4>Delivery</h4>
                                                                    <p>Address</p>
                                                                    <h6 style={{ lineHeight: "1.7" }}>
                                                                        123 Civil Lines Metro Station OK Apt. <br />
                                                                        jaipur Rajasthan <br />
                                                                        1234-45-6550
                                                                    </h6>
                                                                </div>

                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accordion-item">
                                                <h2 class="accordion-header" id="flush-headingThree">
                                                    <button class="accordion-button d-block border-bottom collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                                        <div className='row'>
                                                            <div className='col-md-2'>
                                                                <div className='order-list-img'>
                                                                    <img className='img-fluid' src='./images/fx-1.png' width={"65px"} />
                                                                </div>
                                                            </div>
                                                            <div className='col-md-5 pt-3 order-description'>
                                                                <h4>MacBook</h4>
                                                                <p>Space Grey | 32GB | 1TB</p>

                                                            </div>
                                                            <div className='col-md-5 pt-3 order-description text-end'>
                                                                <h4 style={{ fontWeight: '700' }}>$234</h4>
                                                                <p>Qty1</p>
                                                            </div>

                                                        </div>
                                                    </button>
                                                </h2>
                                                <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                                    <div class="accordion-body">
                                                        <div className='row'>
                                                            <div className='col-md-6'>
                                                                <div className='payment-description'>
                                                                    <h4>Payment</h4>
                                                                    <h6 className='mt-2'>Visa***23 <span class="badge bg-secondary">Visa</span></h6>
                                                                </div>
                                                            </div>
                                                            <div className='col-md-6'>
                                                                <div className='payment-description'>
                                                                    <h4>Delivery</h4>
                                                                    <p>Address</p>
                                                                    <h6 style={{ lineHeight: "1.7" }}>
                                                                        123 Civil Lines Metro Station OK Apt. <br />
                                                                        jaipur Rajasthan <br />
                                                                        1234-45-6550
                                                                    </h6>
                                                                </div>

                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tab-pane fade" id='password' role="tabpanel" aria-labelledby="profile-tab">
                    {/* -----------------------change password------------------------ */}
                    <div class="container mx-auto col-lg-6 mb-5" >
                        <div class="container2 mt-5 p-3 text-start ">
                            <h1>Update your password</h1>
                        </div>

                        <form>
                            <div class="mb-3 mt-4">
                                <label for="InputEmail1" class="form-label">Current password</label>
                                <input type="password" class="form-control" id="name" aria-describedby="emailHelp" />
                            </div>
                            <div class="mb-3 mt-4">
                                <label for="InputEmail1" class="form-label">New password</label>
                                <input type="password" class="form-control" id="name" aria-describedby="emailHelp" />
                            </div>
                            <div class="mb-3 mt-4">
                                <label for="InputEmail1" class="form-label">Confirm password</label>
                                <input type="password" class="form-control" id="name" aria-describedby="emailHelp" />
                            </div>
                            <div class="d-grid gap-2 col-lg-6 mx-auto">
                                <button type="submit" class="btn btn-dark rounded-pill">Update account</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="tab-pane fade" id="billing" role="tabpanel" aria-labelledby="contact-tab">

                    {/* --------------------------change bill------------------------- */}

                    <div class="container mx-auto col-lg-6 mb-5" >
                        <div class="container2 mt-5 p-3 text-start ">
                            <h1>Payments & payouts</h1>
                        </div>
                        <div class="mb-3 mt-4">
                            <p>Payouts refer to the expected returns or disbursements from investments or annuities. A payout may be expressed as a lump sum or on a periodic basis and as either a percentage of the investment's cost or in a real dollar amount.<br></br>

                                A payout can also refer to the period in which an investment or project is expected to recoup its initial capital investment and become minimally profitable. In this case, it is short for "time to payout," "term to payout," or "payout period."<br></br>

                                In terms of financial securities, such as annuities and dividends, payouts refer to the amounts received at given points in time. For example, in the case of an annuity, payouts are made to the annuitant at regular intervals, such as monthly or quarterly.</p>
                        </div>
                    </div></div>
            </div>


        </>
    )
}

export default MyAccount

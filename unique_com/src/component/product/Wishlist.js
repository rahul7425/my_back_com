import React from 'react';
import { Link } from 'react-router-dom';

export default function Wishlist() {
    return (
        <>
            <section className='container wishlist-section my-5'>
                <div className='row'>
                    <div className='col-md-6'>
                        <div className='heading'>
                            <h2>Wishlist</h2>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className='filter-btn float-end'>
                            <div class="btn-group">
                                <button class="btn border btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i class="bi bi-funnel"></i>
                                </button>
                                <ul class="dropdown-menu">
                                    <li className="dropdown-item mt-2">
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                            />
                                            <label className="form-check-label" >
                                                Most Viewed
                                            </label>
                                        </div>
                                    </li>
                                    <li className="dropdown-item mt-2">
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                            />
                                            <label className="form-check-label" >
                                                Most Viewed
                                            </label>
                                        </div>
                                    </li>
                                    <li className="dropdown-item mt-2">
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                            />
                                            <label className="form-check-label" >
                                                Most Viewed
                                            </label>
                                        </div>
                                    </li>
                                    <li className="dropdown-item mt-2">
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                            />
                                            <label className="form-check-label" >
                                                Most Viewed
                                            </label>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <button type="button" class="btn btn-outline-dark  movecartBtn"><i class="bi bi-plus"></i> Add items</button>
                            <button type="button" class="btn btn-outline-dark  movecartBtn"><i class="bi bi-cart-check"></i> Move all to Bag</button>
                        </div>

                    </div>
                </div>
                <hr />
                <div className='row'>
                    <div className='col-md-3 mb-5 mt-4'>
                        <div className='fx-product'>
                            <div class="card border-0">
                                <div className='img-bg'>
                                <span class="badge sold-out position-absolute m-3">Sold Out</span>
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
                    <div className='col-md-3 mb-5 mt-4'>
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
                    <div className='col-md-3 mb-5 mt-4'>
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
                    <div className='col-md-3 mb-5 mt-4'>
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

                </div>
            </section>
        </>
    )
}

import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import MyOrder from "./MyOrder";


export default function Checkout() {
    const [shippingMethod, setShippingMethod] = useState("");

    const handleShippingChange = (event) => {
        setShippingMethod(event.target.value);
    };

    const location = useLocation();

    const isActive = (path) => location.pathname === path;

    // Address
    const [selectedAddress, setSelectedAddress] = useState("saved");
    const [savedAddress, setSavedAddress] = useState({
        name: "John Doe",
        address: "123 Main Street, City, Region, Postal Code",
        number: "1234567890"
    });

    const handleAddressChange = (event) => {
        setSelectedAddress(event.target.value);
    };
    return (
        <>
            <div className='container'>
                <nav
                    style={{
                        "--bs-breadcrumb-divider": `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='currentColor'/%3E%3C/svg%3E")`,
                    }}
                    aria-label="breadcrumb"
                    className="pt-5"
                >
                    <ol className="breadcrumb">
                        <li className={`breadcrumb-item ${isActive("/myorder") ? "active" : ""}`}>
                            <Link to={"/myorder"}>Cart</Link>
                        </li>
                        <li className={`breadcrumb-item ${isActive("/checkout") ? "active" : ""}`}>
                            <Link to={"/checkout"}>Checkout</Link>
                        </li>
                    </ol>
                </nav>
            </div>
            <section className="checkout-section">
                <div className="container my-4">
                    <div className="row">
                        {/* Left Column - Shipping Details */}
                        <div className="col-md-8">
                            <div className=" border px-4 py-4 rounded mb-4">
                                <div className="row">
                                    <h5>Shipping information</h5>
                                    <div className="mb-4 col-md-12 mt-2">
                                        <select
                                            id="address"
                                            className="form-select"
                                            onChange={handleAddressChange}
                                            value={selectedAddress}
                                        >
                                            <option value="">Select Address</option>
                                            <option value="new">Add address</option>
                                            <option value="saved">Saved address</option>
                                        </select>
                                    </div>


                                    {selectedAddress === "new" && (
                                        <>
                                            <hr />
                                            <h5>Shipping address</h5>
                                            <div className="mb-4 col-md-12">
                                                <select id="country" className="form-select">
                                                    <option value="">Select country</option>
                                                    <option value="US">United States</option>
                                                    <option value="CA">Canada</option>
                                                    <option value="GB">United Kingdom</option>
                                                </select>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="mb-3">
                                                    <label htmlFor="firstname" className="form-label">
                                                        First name *
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="firstname"
                                                        className="form-control"
                                                        placeholder="Enter your first name"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="mb-3">
                                                    <label htmlFor="lastname" className="form-label">
                                                        Last name *
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="lastname"
                                                        className="form-control"
                                                        placeholder="Enter your last name"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="mb-3">
                                                    <label htmlFor="email" className="form-label">
                                                        Email address *
                                                    </label>
                                                    <input
                                                        type="email"
                                                        id="email"
                                                        className="form-control"
                                                        placeholder="Enter your email address"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="mb-3">
                                                    <label htmlFor="confirmEmail" className="form-label">
                                                        Confirmation email *
                                                    </label>
                                                    <input
                                                        type="email"
                                                        id="confirmEmail"
                                                        className="form-control"
                                                        placeholder="Enter your confirmation email"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="mb-3">
                                                    <label htmlFor="phone" className="form-label">
                                                        Phone number *
                                                    </label>
                                                    <input
                                                        type="tel"
                                                        id="phone"
                                                        className="form-control"
                                                        placeholder="Enter your phone number (only digits)"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="mb-3">
                                                    <label htmlFor="address" className="form-label">
                                                        Street name and house number *
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="address"
                                                        className="form-control"
                                                        placeholder="Enter your Street name and house number"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="mb-3">
                                                    <label htmlFor="city" className="form-label">
                                                        City *
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="city"
                                                        className="form-control"
                                                        placeholder="City"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="mb-3">
                                                    <label htmlFor="region" className="form-label">
                                                        Select region
                                                    </label>
                                                    <select id="region" className="form-select">
                                                        <option value="">Select region</option>
                                                        <option value="NA">North America</option>
                                                        <option value="EU">Europe</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </>
                                    )}

                                    {selectedAddress === "saved" && (
                                        <div>
                                            <hr />
                                            <h5>Saved Address</h5>
                                            <p><strong>Name:</strong> {savedAddress.name}</p>
                                            <p><strong>Address:</strong> {savedAddress.address}</p>
                                            <p><strong>Number:</strong> {savedAddress.number}</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="border px-4 py-4 rounded mb-4">
                                <div className="row">
                                    <h5>Shipping method</h5>
                                    <div className="col-md-12">

                                        <div className="mb-3 border pb-3 p-4 rounded">
                                            <div class="form-check form-check-inline w-100">
                                                <input class="form-check-input" type="radio"
                                                    name="shipping"
                                                    value="free"
                                                    id="freeShipping"
                                                    checked={shippingMethod === "free"}
                                                    onChange={handleShippingChange}
                                                />
                                                <label className="form-check-label" htmlFor="freeShipping">
                                                    Free shipping <p className="text-muted mb-0">(7–30 business days)</p>
                                                </label>
                                                <span className="float-end">-$0</span>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="mb-3 border pb-3 p-4 rounded">
                                            <div className="form-check form-check-inline w-100">
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    name="shipping"
                                                    value="regular"
                                                    id="regularShipping"
                                                    checked={shippingMethod === "regular"}
                                                    onChange={handleShippingChange}
                                                />
                                                <label className="form-check-label" htmlFor="regularShipping">
                                                    Regular shipping <p className="text-muted mb-0">(3–14 business days)</p>
                                                </label>
                                                <span className="float-end">-$7.5</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="mb-3 border pb-3 p-4 rounded">
                                            <div className="form-check form-check-inline w-100">
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    name="shipping"
                                                    value="express"
                                                    id="expressShipping"
                                                    checked={shippingMethod === "express"}
                                                    onChange={handleShippingChange}
                                                />
                                                <label className="form-check-label" htmlFor="expressShipping">
                                                    Express shipping <p className="text-muted mb-0">(1–3 business days)</p>
                                                </label>
                                                <span className="float-end">-$22.50</span>
                                            </div>
                                        </div>

                                    </div>

                                </div>
                            </div>
                            {/* Payment Section */}
                            <div className="border p-4 rounded">
                                <div className="row">
                                    <h5>Payment method</h5>
                                    <div className="col-md-12 mb-2">
                                        <div class="form-check form-check-inline border pb-3 p-4 rounded w-100">
                                            <input class="form-check-input ms-2" style={{ marginTop: "7px" }} type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                                            <label class="form-check-label ms-1" for="inlineRadio1">Pay Online via PayU</label>
                                        </div>

                                    </div>
                                    <div className="col-md-12 mb-2">
                                        <div class="form-check form-check-inline border pb-3 p-4 rounded w-100">
                                            <input class="form-check-input ms-2" style={{ marginTop: "7px" }} type="radio" name="inlineRadioOptions" id="payUpi" value="option1" />
                                            <label class="form-check-label ms-1" for="payUpi">Pay Online via UPI</label>
                                        </div>
                                    </div>
                                    <div className="col-md-12 mb-2">
                                        <div class="form-check form-check-inline border pb-3 p-4 rounded w-100">
                                            <input class="form-check-input ms-2" style={{ marginTop: "7px" }} type="radio" name="inlineRadioOptions" id="cod" value="option1" />
                                            <label class="form-check-label ms-1" for="cod">Cash on delivery (COD)</label>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        {/* Right Column - Order Summary */}
                        <div className="col-md-4">
                            <div className="card position-sticky" style={{ top: '2rem' }}>
                                <div className="card-body">
                                    <h5 className="card-title">Your Order</h5>
                                    <div className="d-flex justify-content-between">
                                        <span>Cahier Leather Bag</span>
                                        <span>$2,500.00</span>
                                    </div>
                                    <hr />
                                    <div className="mb-3">
                                        <label htmlFor="discountCode" className="form-label">
                                            Discount Code
                                        </label>
                                        <div className="input-group">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="discountCode"
                                                placeholder="Add discount code"
                                            />
                                            <button className="btn btn-outline-secondary">Apply</button>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <span>Subtotal</span>
                                        <span>$2,500.00</span>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <span>Discount</span>
                                        <span>-$0</span>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <span>Shipment cost</span>
                                        <span>
                                            {shippingMethod === "express"
                                                ? "$22.50"
                                                : shippingMethod === "regular"
                                                    ? "$7.50"
                                                    : "$0"}
                                        </span>
                                    </div>
                                    <hr />
                                    <div className="d-flex justify-content-between fw-bold">
                                        <span>Grand total</span>
                                        <span>
                                            $
                                            {shippingMethod === "express"
                                                ? "2,522.50"
                                                : shippingMethod === "regular"
                                                    ? "2,507.50"
                                                    : "2,500.00"}
                                        </span>
                                    </div>
                                    <button className="btn btn-primary w-100 mt-3">Continue to payment</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >

        </>
    )
}

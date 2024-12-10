import React, { useState } from "react";
import './MyOrder.css'
import Checkout from "./Checkout";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function MyOrder() {
    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            name: "Cardigan",
            color: "Green",
            size: "M",
            image: "./images/fx-1.png",
            quantity: 1,
            price: 2500.0,
        },
        {
            id: 2,
            name: "Cahier Leather Shoulder Bag",
            color: "Grey",
            size: "",
            image: "./images/fx-2.png",
            quantity: 1,
            price: 5500.0,
        },
        {
            id: 3,
            name: "Nordgreen Watches",
            color: "Brown",
            size: "M",
            image: "./images/fx-3.png",
            quantity: 1,
            price: 2500.0,
        },
        {
            id: 4,
            name: "Nordgreen Watches",
            color: "Brown",
            size: "M",
            image: "./images/tshirt_no_bg.png",
            quantity: 1,
            price: 2500.0,
        },
        {
            id: 5,
            name: "Nordgreen Watches",
            color: "Brown",
            size: "M",
            image: "./images/fx-1.png",
            quantity: 1,
            price: 2500.0,
        },
        {
            id: 6,
            name: "Nordgreen Watches",
            color: "Brown",
            size: "M",
            image: "./images/fx-2.png",
            quantity: 1,
            price: 2500.0,
        },
    ]);
    // Handle quantity change
    const handleQuantityChange = (id, delta) => {
        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id
                    ? { ...item, quantity: Math.max(1, item.quantity + delta) }
                    : item
            )
        );
    };

    // Handle item removal
    const handleRemove = (id) => {
        setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
    };

    // Calculate totals
    const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

    const location = useLocation();

    const isActive = (path) => location.pathname === path;
    const navigate = useNavigate();

    const handleCheckout = () => {
      navigate("/checkout"); 
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
            <section className='container my-4 product-table'>
                <div className="row">
                    {/* Cart Items */}
                    <div className="col-md-8">
                        <div className="table-responsive">

                        </div>
                        <table className="table">
                            <thead className="table-light">
                                <tr>
                                    <th scope="col">
                                        <input className="form-check-input" type="checkbox" />
                                    </th>
                                    <th scope="col">PRODUCT</th>
                                    <th scope="col">QUANTITY</th>
                                    <th scope="col" className="text-end">PRICE</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cartItems.map((item) => (
                                    <tr key={item.id}>
                                        <td>
                                            <input className="form-check-input" type="checkbox" />
                                        </td>
                                        <td>
                                            <div className="d-flex align-items-center order-description">
                                                <div className="order-list-img">
                                                    <img
                                                        src={item.image}
                                                        alt={item.name}
                                                        style={{ objectFit: "cover" }}
                                                        width={"65px"}
                                                    />
                                                </div>

                                                <div className="ms-3">
                                                    <h5>{item.name}</h5>
                                                    <p>
                                                        {item.color} {item.size && `| ${item.size}`}
                                                    </p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="quantity-controls">
                                                <button
                                                    className="btn btn-outline-secondary"
                                                    onClick={() => handleQuantityChange(item.id, -1)}
                                                    style={{ padding: "revert" }}
                                                >
                                                    -
                                                </button>
                                                <span className="quantity-value" style={{ fontSize: '14px' }}>{item.quantity}</span>
                                                <button
                                                    className="btn btn-outline-secondary"
                                                    onClick={() => handleQuantityChange(item.id, 1)}
                                                    style={{ padding: "revert" }}
                                                >
                                                    +
                                                </button>
                                            </div>

                                            <button
                                                className="btn btn-link text-danger mt-3 product-removeBtn"
                                                onClick={() => handleRemove(item.id)}
                                            >
                                                <i class="bi bi-trash3"></i>   Remove
                                            </button>
                                        </td>
                                        <td className="text-end" style={{ fontSize: '14px' }}>${(item.price * item.quantity).toFixed(2)}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Summary Section */}
                    <div className="col-md-4" >
                        <div style={{ position: "sticky", top: '2rem' }}>

                            <h5 className="card-title">Summary</h5>
                            <div className="table-responsive mt-2 border rounded">
                                <table className="table" style={{ lineHeight: '3' }}>
                                    <thead className="table-light">
                                        <tr>
                                            <th>Subtotal</th>
                                            <td className="text-end">${subtotal.toFixed(2)}</td>
                                        </tr>
                                        <tr>
                                            <th>Discount</th>
                                            <td className="text-end">$0</td>
                                        </tr>

                                    </thead>
                                    <tfoot>
                                        <tr>
                                            <td>Grand Total</td>
                                            <td className="text-end">${subtotal.toFixed(2)}</td>
                                        </tr>
                                        <tr>
                                            <td colSpan={2} className="border-bottom-0 pb-0">
                                                <button onClick={handleCheckout} className="btn btn-dark w-100" style={{ fontSize: '12px' }}>Checkout now</button>

                                            </td>
                                        </tr>
                                    </tfoot>
                                </table>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

        </>
    )
}

export default MyOrder

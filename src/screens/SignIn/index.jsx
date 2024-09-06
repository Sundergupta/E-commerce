import React from "react";
import './SignIn.css'

const SignIn = () => {
    return (
        <>
            <div>
                <header>
                    <div className="header">
                        <h2>Faison Wear</h2>
                        <input type="text" placeholder="Search here" />
                        <div className="rightHeader">
                            <h6>Store</h6>
                            <h6>Wish List</h6>
                            <button className="login">Login</button>
                        </div>
                    </div>
                </header>
                <nav className="nav-bar">
                    <a href="#new-arrivals">New Arrivals</a>
                    <a href="#fresh" className="highlight">#Fresh</a>
                    <a href="#dresses">Dresses</a>
                    <a href="#tops">Tops</a>
                    <a href="#jackets">Jackets</a>
                    <a href="#lingerie">Lingerie & Lounge Wear</a>
                    <a href="#beach-wear">Beach Wear</a>
                    <a href="#blouse">Blouse</a>
                    <a href="#denim">Denim</a>
                    <a href="#vintage">Vintage</a>
                    <a href="#shoes">Shoes</a>
                    <a href="#sandals">Sandals</a>
                    <a href="#bags">Bags</a>
                    <a href="#jewelries">Jewelries</a>
                </nav>
                <div className="login-section">

                </div>
            </div>
        </>
    );
};

export default SignIn; 

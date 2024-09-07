import React, { useState } from "react";
import './SignIn.css';
import NavBar from "../../components/NavBar";
import bannerImg from "../../assets/SignInImg.svg";

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({
        email: '',
        password: ''
    });

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        
        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: value ? '' : `${name} is required`
        }));

        if (name === 'email') setEmail(value);
        if (name === 'password') setPassword(value);
    };

    const submitForm = (e) => {
        e.preventDefault();

        let valid = true;
        let newErrors = { email: '', password: '' };

        if (!email || !validateEmail(email)) {
            newErrors.email = 'Please enter a valid email address';
            valid = false;
        }

        if (!password) {
            newErrors.password = 'Password is required';
            valid = false;
        }

        if (!valid) {
            setErrors(newErrors);
        } else {
            alert(`Email: ${email}\nPassword: ${password}`);
        }
    };

    return (
        <>
            <NavBar />
            <div className="signIn">
                <div className="image-section">
                    <img src={bannerImg} alt="banner" />
                </div>
                <div className="form">
                    <h2>Sign In</h2>
                    <p>Please Enter Details for login</p>
                    <form onSubmit={submitForm}>
                        <div className="input">
                            <p>User name or email address</p>
                            <input
                                type="text"
                                id="email-input"
                                name="email"
                                placeholder="Enter your User name or email"
                                value={email}
                                onChange={handleInputChange}
                            />
                            {errors.email && <span className="error">{errors.email}</span>}
                            <p>Password</p>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                placeholder="Enter your password"
                                value={password}
                                onChange={handleInputChange}
                            />
                            {errors.password && <span className="error">{errors.password}</span>}
                        </div>
                        <a href="#">Forgot your password?</a>
                        <br />
                        <button className="signIn-button" type="submit">Sign In</button>
                        <p>Don't have an account? <a href="#">Sign Up</a></p>
                    </form>
                </div>
            </div>
        </>
    );
};

export default SignIn;

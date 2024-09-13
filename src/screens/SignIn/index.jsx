import React, { useState } from "react";
import NavBar from "../../components/NavBar";
// import Footer from "../../components/footer";
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
        <div className="flex flex-col">
            <NavBar />
            <div className="flex flex-1 gap-4 h-full">
                <div className="w-1/2 h-screen overflow-hidden">
                    <img src={bannerImg} alt="banner" className="w-full  object-contain" />

                </div>
                <div className="w-1/3 p-8 bg-white min-h-[60vh]">
                    <h2 className="text-2xl font-bold mb-4 text-left">Sign In</h2>
                    <p className="text-left text-lg mb-4">Please enter details for login</p>

                    <form onSubmit={submitForm}>
                        <div className="flex flex-col items-start">
                            <p className="mb-2 font-medium text-left">User name or email address</p>
                            <input
                                className="w-full p-4 border border-gray-300 rounded-lg text-lg bg-gray-100 mb-4 text-left"
                                type="text"
                                id="email-input"
                                name="email"
                                placeholder="Enter your User name or email"
                                value={email}
                                onChange={handleInputChange}
                            />
                            {errors.email && <span className="text-red-500 text-sm mt-1 text-left">{errors.email}</span>}

                            <p className="mb-2 font-medium text-left">Password</p>
                            <input
                                className="w-full p-4 border border-gray-300 rounded-lg text-lg bg-gray-100 mb-4 text-left"
                                type="password"
                                id="password"
                                name="password"
                                placeholder="Enter your password"
                                value={password}
                                onChange={handleInputChange}
                            />
                            {errors.password && <span className="text-red-500 text-sm mt-1 text-left">{errors.password}</span>}
                        </div>

                        <div className="w-full text-right mt-2">
                            <a href="#" className="text-blue-500 text-sm hover:underline">Forgot your password?</a>
                        </div>

                        <button
                            className="bg-gray-900 text-white font-bold py-3 px-6 rounded-md text-sm mt-5 w-1/4 hover:bg-gray-800 text-center"
                            type="submit"
                        >
                            Sign In
                        </button>

                        <p className="mt-4">
                            Don't have an account? <a href="#" className="text-blue-500">Sign Up</a>
                        </p>
                    </form>
                </div>
            </div>
            {/* <Footer /> */}
        </div>
    );
};

export default SignIn;

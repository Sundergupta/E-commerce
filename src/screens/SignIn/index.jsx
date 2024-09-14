import React, { useState } from "react";
import NavBar from "../../components/NavBar";
// import Footer from "../../components/footer";
import bannerImg from "../../assets/SignInImg.svg";
import { Formik } from "formik";

const SignIn = () => {
    const [showPassword, setShowPassword] = useState(false);
    const passwordVisible = () => {
        setShowPassword(!showPassword);
    }
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    // const [errors, setErrors] = useState({
    //     email: '',
    //     password: ''
    // });

    // const validateEmail = (email) => {
    //     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    //     return emailRegex.test(email);
    // };

    // const handleInputChange = (e) => {
    //     const { name, value } = e.target;

    //     setErrors((prevErrors) => ({
    //         ...prevErrors,
    //         [name]: value ? '' : `${name} is required`
    //     }));

    //     if (name === 'email') setEmail(value);
    //     if (name === 'password') setPassword(value);
    // };

    // const submitForm = (e) => {
    //     e.preventDefault();

    //     let valid = true;
    //     let newErrors = { email: '', password: '' };

    //     if (!email || !validateEmail(email)) {
    //         newErrors.email = 'Please enter a valid email address';
    //         valid = false;
    //     }

    //     if (!password) {
    //         newErrors.password = 'Password is required';
    //         valid = false;
    //     }

    //     if (!valid) {
    //         setErrors(newErrors);
    //     } else {
    //         alert(`Email: ${email}\nPassword: ${password}`);
    //     }
    // };

    return (
        <div className="flex flex-col h-screen overflow-hidden">
            <NavBar />
            <div className="flex flex-1 gap-4 h-full ">
                <div className="w-1/2 ">
                    <img src={bannerImg} alt="banner" className="w-full object-contain" />
                </div>
                <div className="w-1/3 p-8 bg-white min-h-[60vh]">
                    <h2 className="text-2xl font-bold mb-4 text-left">Sign In</h2>
                    <p className="text-left text-lg mb-4">Please enter details for login</p>

                    <Formik
                        initialValues={{ email: "", password: "" }}
                        validate={(values) => {
                            const error = {};
                            if (!values.email) {
                                error.email = "Required";
                            } else if (
                                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                            ) {
                                error.email = "Invalid Email Address";
                            }
                            if (!values.password) {
                                error.password = "Required";
                            }
                            return error;
                        }}
                        onSubmit={(values) => {
                            console.log(values);
                        }}
                    >
                        {({ values, errors, handleChange, handleSubmit }) => (
                            <form onSubmit={handleSubmit}>
                                <div className="flex flex-col items-start">
                                    <p className="mb-2 font-medium text-left">User name or email address</p>
                                    <input
                                        className="w-full p-4 border border-gray-300 rounded-lg text-lg bg-gray-100 mb-4 text-left"
                                        type="text"
                                        id="email-input"
                                        name="email"
                                        placeholder="Enter your User name or email"
                                        value={values.email}
                                        onChange={handleChange}
                                    />
                                    {errors.email && <span className="text-red-500 text-sm mt-1 text-left">{errors.email}</span>}

                                    <p className="mb-2 font-medium text-left">Password</p>
                                    <div className="relative w-full">
                                        <input
                                            className="w-full p-4 border border-gray-300 rounded-lg text-lg bg-gray-100 mb-4 text-left"
                                            type={showPassword ? "text" : "password"}
                                            id="password"
                                            name="password"
                                            placeholder="Enter your password"
                                            value={values.password}
                                            onChange={handleChange}
                                        />
                                        <button
                                            type="button"
                                            className="absolute right-4 top-4 focus:outline-none"
                                            onClick={passwordVisible}
                                        >
                                            <i className={`fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                                        </button>
                                    </div>
                                    {errors.password && <span className="text-red-500 text-sm mt-1 text-left">{errors.password}</span>}
                                </div>

                                <div className="w-full text-right mt-2">
                                    <a href="#" className="text-blue-500 text-sm hover:underline">Forgot your password?</a>
                                </div>

                                {/* Align Sign In Button to the left */}
                                <div className="w-full mt-5">
                                    <button
                                        className="bg-gray-900 text-white font-bold py-3 px-6 rounded-md text-sm hover:bg-gray-800"
                                        type="submit"
                                    >
                                        Sign In
                                    </button>
                                </div>

                                <p className="mt-4">
                                    Don't have an account? <a href="#" className="text-blue-500">Sign Up</a>
                                </p>
                            </form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    );
};

export default SignIn;

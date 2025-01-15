import React from "react";
import NavBar from "../../components/NavBar";
import bannerImg from "../../assets/SignInImg.svg";
import { Formik } from "formik";
import { Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useState } from "react";
import { firebaselogIn } from "../../firebase-function";

const SignIn = () => {
    return (

        <div className="flex flex-col h-screen overflow-hidden">
            <div className="flex flex-1 gap-4 h-full">
                <div className="w-1/2">
                    <img src={bannerImg} alt="banner" className="w-full object-contain" />
                </div>
                <div className="w-1/3 p-8 bg-white min-h-[60vh]">
                    <h2 className="text-2xl font-bold mb-4 text-left">Sign In</h2>
                    <p className="text-left text-lg mb-4">Please enter details for login</p>

                    <Formik
                        initialValues={{ email: "", password: "" }}
                        validate={(values) => {
                            const errors = {};
                            if (!values.email) {
                                errors.email = "Required";
                            } else if (
                                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                            ) {
                                errors.email = "Invalid Email Address";
                            }
                            if (!values.password) {
                                errors.password = "Required";
                            }
                            return errors;
                        }}
                        onSubmit={(values, { setSubmitting }) => {
                            firebaselogIn(values.email, values.password)
                                .then((userCredential) => {
                                    console.log("Login Successful", userCredential);
                                })
                                .catch((error) => {
                                    console.error("Error during sign-in", error.message);
                                })
                                .finally(() => setSubmitting(false));
                        }}
                    >
                        {({ values, errors, handleChange, handleSubmit, isSubmitting }) => (
                            <form onSubmit={handleSubmit} className="login__container">
                                <input
                                    type="text"
                                    className="login__textBox  w-full p-4 border border-gray-300 rounded-lg text-lg pg-gray-100 mb-4 text left"
                                    value={values.email}
                                    onChange={handleChange}
                                    placeholder="E-mail Address"
                                    name="email"
                                />
                                {errors.email && (
                                    <span className="text-red-500 text-sm mt-1">{errors.email}</span>
                                )}
                                <p className="mb-2 font-medium text-left">Password</p>

                                <input
                                    type="password"
                                    className="login__textBox  w-full p-4 border border-gray-300 rounded-lg text-lg pg-gray-100 mb-4 text left"
                                    value={values.password}
                                    onChange={handleChange}
                                    placeholder="Password"
                                    name="password"
                                />
                                {errors.password && (
                                    <span className="text-red-500 text-sm mt-1">{errors.password}</span>
                                )}

                                <button
                                    className="login__btn"
                                    type="submit"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? "Logging in..." : "Login"}
                                </button>
                                <div>
                                    <Link to="/reset">Forgot Password</Link>
                                </div>
                                <div>
                                    Don't have an account? <Link to="/register">Register</Link> now.
                                </div>
                            </form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    );
};

export default SignIn;

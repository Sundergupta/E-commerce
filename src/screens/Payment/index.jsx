// Payment.jsx
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, clearCart } from '../../store/cartSlice'; // adjust path as needed
import { useNavigate } from 'react-router-dom';
import PaymentImg from '../../assets/Payment/Payment.png'; // adjust to your image path

const Payment = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const cartItems = useSelector(state => state.cart.cartItems);

    const [isModalOpen, setIsModalOpen] = useState(false);

    const totalPrice = cartItems.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
    );

    const handleRemove = (cartId) => {
        dispatch(removeFromCart({ cartId }));
    };

    const handlePlaceOrder = () => {
        setIsModalOpen(true);
        dispatch(clearCart());
    };

    useEffect(() => {
        if (isModalOpen) {
            const timer = setTimeout(() => {
                navigate('/');
            }, 4000);

            return () => clearTimeout(timer);
        }
    }, [isModalOpen, navigate]);

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="max-w-6xl mx-auto bg-white shadow-md rounded-lg p-6 flex flex-col lg:flex-row gap-8">

                {/* Left section - Shipping and Payment Method */}
                <div className="w-full lg:w-2/3 space-y-6">
                    <h2 className="text-2xl font-semibold text-gray-800">Shipping Information</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input type="text" placeholder="First Name" className="border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        <input type="text" placeholder="Last Name" className="border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        <input type="text" placeholder="Address" className="col-span-2 border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        <input type="text" placeholder="Street Number" className="border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        <input type="text" placeholder="City" className="border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        <input type="text" placeholder="Pincode" className="border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        <input type="text" placeholder="Phone Number" className="border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold text-gray-800 mt-4">Payment Method</h2>
                        <div className="space-y-4 mt-4">
                            <label className="block text-gray-700"><input type="radio" name="payment" className="mr-2" /> Credit / Debit Card</label>
                            <label className="block text-gray-700"><input type="radio" name="payment" className="mr-2" /> Cash on Delivery</label>
                            <label className="block text-gray-700"><input type="radio" name="payment" className="mr-2" /> PayPal</label>
                        </div>
                    </div>
                </div>

                {/* Right section - Order Summary */}
                <div className="w-full lg:w-1/3 bg-gray-50 p-4 rounded-lg shadow-inner">
                    <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

                    <div className="space-y-4 mb-4">
                        {cartItems.map((item) => (
                            <div key={item.cartId} className="flex gap-4 items-start border-b pb-4 relative">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-20 h-20 object-cover rounded"
                                />

                                <div className="flex-1">
                                    <p className="font-medium text-gray-800">{item.name}</p>
                                    <p className="text-sm text-gray-500 mb-1">
                                        Size: {item.size}, Color: {item.color}
                                    </p>
                                    <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                                </div>

                                <div className="text-right">
                                    <p className="font-semibold text-gray-700 whitespace-nowrap">
                                        ₹{item.price}
                                    </p>
                                    <button
                                        onClick={() => handleRemove(item.cartId)}
                                        className="text-red-500 text-sm hover:underline mt-2"
                                    >
                                        Remove
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="flex justify-between text-lg font-semibold mt-2">
                        <span>Total:</span>
                        <span>₹{totalPrice}</span>
                    </div>

                    <button
                        onClick={handlePlaceOrder}
                        className="mt-6 w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition duration-200"
                    >
                        Place Order
                    </button>
                </div>
            </div>

            {/* Modal - Payment Successful */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-md relative">
                        <button
                            onClick={() => setIsModalOpen(false)}
                            aria-label="Close modal"
                            className="absolute top-2 right-2 text-gray-500 hover:text-black text-xl"
                        >
                            &times;
                        </button>
                        <img src={PaymentImg} alt="Payment Successful" className="mx-auto mb-4" />
                        <h1 className="text-green-500 text-2xl font-extrabold text-center">
                            Payment Successful
                        </h1>
                        <p className="text-center text-gray-500 mt-2">
                            Redirecting to Home...
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Payment;

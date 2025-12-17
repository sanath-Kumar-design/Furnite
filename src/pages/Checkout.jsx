import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import { div } from 'framer-motion/client';

const CheckoutPage = () => {
    const [cart, setCart] = useState([])

    useEffect(() => {
        const savedCart = JSON.parse(sessionStorage.getItem("cart"));
        setCart(Array.isArray(savedCart) ? savedCart : []);
    }, [])

    const subtotal = cart.reduce(
        (total, item) => total + item.price * item.qty,
        0
    );

    const shipping = cart.length > 3 ? 0 : 5;
    const tax = subtotal * 0.0875;
    const total = subtotal + shipping + tax;
    return (
        <div>
            <Header />
            <div className="min-h-screen bg-gray-50 py-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-8">Checkout</h1>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div className="space-y-8">
                            <div className="bg-white p-6 rounded-lg shadow">
                                <h2 className="text-xl font-semibold text-gray-900 mb-4">Billing Information</h2>
                                <form className="space-y-4">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div>
                                            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
                                            <input type="text" id="firstName" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                                        </div>
                                        <div>
                                            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
                                            <input type="text" id="lastName" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                                        <input type="email" id="email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                                    </div>
                                    <div>
                                        <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
                                        <input type="text" id="address" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                                    </div>
                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                        <div>
                                            <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
                                            <input type="text" id="city" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                                        </div>
                                        <div>
                                            <label htmlFor="state" className="block text-sm font-medium text-gray-700">State</label>
                                            <input type="text" id="state" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                                        </div>
                                        <div>
                                            <label htmlFor="zip" className="block text-sm font-medium text-gray-700">ZIP Code</label>
                                            <input type="text" id="zip" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                                        </div>
                                    </div>
                                </form>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow">
                                <h2 className="text-xl font-semibold text-gray-900 mb-4">Shipping Information</h2>
                                <div className="flex items-center mb-4">
                                    <input type="checkbox" id="sameAsBilling" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                                    <label htmlFor="sameAsBilling" className="ml-2 block text-sm text-gray-900">Same as billing address</label>
                                </div>
                                <p className="text-sm text-gray-500">Shipping form fields would mirror billing here.</p>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow">
                                <h2 className="text-xl font-semibold text-gray-900 mb-4">Payment Information</h2>
                                <form className="space-y-4">
                                    <div>
                                        <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700">Card Number</label>
                                        <input type="text" id="cardNumber" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                                    </div>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div>
                                            <label htmlFor="expiry" className="block text-sm font-medium text-gray-700">Expiry Date</label>
                                            <input type="text" id="expiry" placeholder="MM/YY" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                                        </div>
                                        <div>
                                            <label htmlFor="cvv" className="block text-sm font-medium text-gray-700">CVV</label>
                                            <input type="text" id="cvv" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow h-fit">
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">Order Summary</h2>

                            <div className="space-y-3">
                                {cart.map(item => (
                                    <div key={item.id} className="flex justify-between items-center">
                                        <span className="text-gray-700 flex items-center gap-2">
                                            <div className='w-20 h-20 rounded-xl overflow-hidden'><img src={item.image_path} alt="" /></div>
                                            {item.name} x {item.qty}
                                        </span>
                                        <span className="text-gray-900">
                                            ${(item.price * item.qty).toFixed(2)}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            <hr className="my-4" />

                            <div className="space-y-2">
                                <div className="flex justify-between">
                                    <span>Subtotal</span>
                                    <span>${subtotal.toFixed(2)}</span>
                                </div>

                                <div className="flex justify-between">
                                    <span>Shipping</span>
                                    <span>${shipping.toFixed(2)}</span>
                                </div>

                                <div className="flex justify-between">
                                    <span>Tax</span>
                                    <span>${tax.toFixed(2)}</span>
                                </div>
                            </div>

                            <hr className="my-4" />

                            <div className="flex justify-between text-lg font-semibold">
                                <span>Total</span>
                                <span>${total.toFixed(2)}</span>
                            </div>

                            <button className="w-full mt-6 bg-indigo-600 text-white py-3 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                                Place Order
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckoutPage;
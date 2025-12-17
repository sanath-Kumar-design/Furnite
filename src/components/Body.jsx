import React, { useState } from 'react';
import Cart from '../pages/Cart';
import { FaCheck } from 'react-icons/fa';
import Notification from './Notification';
import { Link } from 'react-router-dom';

export const Products = [
    {
        id: "sample-chair-1",
        name: "Elegant Armchair",
        type: "chair",
        description: "Comfortable armchair with soft fabric and wooden legs.",
        price: "249",
        image_path: "https://storage.googleapis.com/a1aa/image/79394918-a7af-4ac2-1561-39a957ace7c7.jpg",
    },
    {
        id: "sample-table-2",
        name: "Wooden Dining Table",
        type: "table",
        description: "Spacious dining table made from premium oak wood.",
        price: "499",
        image_path: "https://storage.googleapis.com/a1aa/image/98bf393b-1f89-45d9-3fc8-18f01ae2445a.jpg"
    },
    {
        id: "sample-sofa-3",
        name: "Modern Sofa",
        type: "sofa",
        description: "Sleek and comfortable sofa perfect for any living room.",
        price: "799",
        image_path: "https://storage.googleapis.com/a1aa/image/01880a10-ca08-4ccc-bcbd-6c8ea2d0b732.jpg"
    },
    {
        id: "sample-storage-4",
        name: "Storage Cabinet",
        type: "storage",
        description: "Stylish cabinet with ample storage space for your home.",
        price: "349",
        image_path: "https://storage.googleapis.com/a1aa/image/b7d4b510-e943-43ae-f651-5356ad82f2e1.jpg"
    }
];

function Body() {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [type, setType] = useState("")
    const [showNotification, setShowNotification] = useState(false);
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const handleSubscribe = () => {
        if (emailPattern.test(email)) {
            setMessage("Thanks for subscribing")
            setType("success")
        }
        else if (email === "") {
            setMessage("Enter an email")
            setType("error")
        } else {
            setMessage("Enter a valid email")
            setType("error")

        }
        setShowNotification(true)
        setTimeout(() => setShowNotification(false), 2000)

    }


    const onClickScroll = () => {
        const section = document.getElementById("Categories");
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    }

    function Product({ item }) {
        const [showNotification, setShowNotification] = useState(false);
        const addToCart = () => {
            let cart = JSON.parse(sessionStorage.getItem("cart"));
            if (!Array.isArray(cart)) cart = [];
            const existingItem = cart.find(i => i.id === item.id);

            if (existingItem) {
                cart = cart.map(i =>
                    i.id === item.id ? { ...i, qty: i.qty + 1 } : i
                );
            } else {
                cart.push({ ...item, qty: 1 });
            }
            sessionStorage.setItem("cart", JSON.stringify(cart));
            setShowNotification(true);
            setTimeout(() => setShowNotification(false), 2000);
        };



        return (

            <article className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition">
                <img
                    alt={item.name}
                    className="w-full h-48 object-cover"
                    src={item.image_path}
                />
                <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {item.name}
                    </h3>
                    <p className="text-gray-700 mb-4">{item.description}</p>
                    <div className="flex items-center justify-between">
                        <span className="text-xl font-bold text-gray-900">${item.price}</span>
                        <button
                            onClick={addToCart}
                            aria-label={`Add ${item.name} to cart`}
                            className="bg-gray-900 text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-gray-800 transition cursor-pointer"
                        >
                            Add to Cart
                        </button>
                        <Notification message="Item added to cart" visible={showNotification} />
                    </div>
                </div>
            </article>
        );
    }

    // Products Data


    return (

        <div className="flex justify-center ">
            <main className="w-full  md:max-w-7xl mx-auto">

                <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mt-5">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900 mb-6">
                            Discover Your Perfect Furniture
                        </h1>
                        <p className="text-gray-700 mb-8 max-w-xl">
                            Explore our exclusive collection of modern and classic furniture designed to transform your living space.
                        </p>
                        <button onClick={onClickScroll} className="inline-block bg-gray-900 text-white px-8 py-3 rounded-md font-semibold hover:bg-gray-800 transition" >
                            Shop Now
                        </button>
                    </div>
                    <div className="relative">
                        <img alt="Modern living room with a stylish gray sofa, wooden coffee table, and decorative plants" className="rounded-lg shadow-lg w-full object-cover" height="400" loading="lazy" src="https://storage.googleapis.com/a1aa/image/3433d4c9-4eb5-484e-7e3d-05e8ad6baaad.jpg" width="600" />
                    </div>
                </section>
                <section className="mt-20" id="Categories">
                    <h2 className="text-3xl font-semibold text-gray-900 mb-8 text-center">
                        Shop by Category
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                        <Link className="group block rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition" to={"/chair"}>
                            <img alt="Elegant wooden chair with cushioned seat in a bright room" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" height="300" loading="lazy" src="https://storage.googleapis.com/a1aa/image/6dd11956-1930-40d4-0dd5-ea7f5516b814.jpg" width="400" />
                            <div className="p-4 bg-white">
                                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-gray-700">
                                    Chairs
                                </h3>
                            </div>
                        </Link>
                        <Link className="group block rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition" to={"/table"}>
                            <img alt="Modern wooden dining table with chairs in a sunlit room" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" height="300" loading="lazy" src="https://storage.googleapis.com/a1aa/image/c9c377fb-b2e0-442f-53bd-6fa53bace573.jpg" width="400" />
                            <div className="p-4 bg-white">
                                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-gray-700">
                                    Tables
                                </h3>
                            </div>
                        </Link>
                        <Link className="group block rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition" to={"/sofas"}>
                            <img alt="Comfortable modern sofa in a cozy living room setting" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" height="300" loading="lazy" src="https://storage.googleapis.com/a1aa/image/e018d8e6-c3cc-4db5-aec8-cadb3427f61d.jpg" width="400" />
                            <div className="p-4 bg-white">
                                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-gray-700">
                                    Sofas
                                </h3>
                            </div>
                        </Link>
                        <Link className="group block rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition" to={"/storage"}>
                            <img alt="Modern wooden storage cabinet with drawers and shelves" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" height="300" loading="lazy" src="https://storage.googleapis.com/a1aa/image/54138c1d-e1be-4278-50ec-04eb7a5e3990.jpg" width="400" />
                            <div className="p-4 bg-white">
                                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-gray-700">
                                    Storage
                                </h3>
                            </div>
                        </Link>
                    </div>
                </section>
                {/* Featured Products Section */}
                <section className="mt-20">
                    <h2 className="text-3xl font-semibold text-gray-900 mb-8 text-center">
                        Featured Products
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        {Products.map((product, index) => (
                            <Product key={index} item={product} />
                        ))}
                    </div>
                </section>

                <section className="mt-20 bg-gray-50 py-16 rounded-lg" id="About">
                    <div className="max-w-5xl mx-auto text-center px-6">
                        <h2 className="text-3xl font-semibold text-gray-900 mb-6">
                            About Furnite
                        </h2>
                        <p className="text-gray-700 mb-8 mx-auto">
                            At Furnite, we believe furniture is more than function—it's an expression of your lifestyle. Every piece we craft combines timeless design, premium materials, and masterful craftsmanship to create furniture that stands out and lasts for generations.

                            From elegant living room essentials to statement pieces for your workspace, we blend modern aesthetics with enduring comfort. Our collections are thoughtfully designed for those who value quality, detail, and sophistication in every corner of their home.

                            Backed by a passion for design and a commitment to excellence, Furnite is where your dream space begins.
                        </p>
                        <a className="inline-block bg-gray-900 text-white px-8 py-3 rounded-md font-semibold hover:bg-gray-800 transition" href="#">
                            Learn More
                        </a>
                    </div>
                    <section className="mt-20 bg-gray-50 py-16 rounded-lg">
                        <h2 className="text-3xl font-semibold text-gray-900 mb-12 text-center">
                            What Our Customers Say
                        </h2>
                        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-6">
                            <blockquote className="bg-white p-6 rounded-lg shadow-md">
                                <p className="text-gray-700 mb-4">
                                    "Furnite transformed my living room! The quality and design are outstanding. Highly recommend!"
                                </p>
                                <footer className="flex items-center space-x-4">
                                    <img alt="Portrait of John Doe, a happy customer with short brown hair and glasses" className="w-12 h-12 rounded-full object-cover" height="48" loading="lazy" src="https://i.pinimg.com/736x/bb/c0/63/bbc063a9df4bfaf791147016892e4094.jpg" width="48" />
                                    <div>
                                        <p className="font-semibold text-gray-900">
                                            Robert Downey Jr.
                                        </p>
                                        <p className="text-sm text-gray-500">
                                            Verified Buyer
                                        </p>
                                    </div>
                                </footer>
                            </blockquote>
                            <blockquote className="bg-white p-6 rounded-lg shadow-md">
                                <p className="text-gray-700 mb-4">
                                    "Excellent customer service and fast delivery. The sofa I bought is super comfortable and stylish."
                                </p>
                                <footer className="flex items-center space-x-4">
                                    <img alt="Portrait of Henry Cavill, a satisfied customer with long blonde hair and a bright smile" className="w-12 h-12 rounded-full object-cover" height="48" loading="lazy" src="https://i.pinimg.com/736x/70/14/e0/7014e01471b17ccd33fe2dd4d195c776.jpg" width="48" />
                                    <div>
                                        <p className="font-semibold text-gray-900">
                                            Henry Cavill
                                        </p>
                                        <p className="text-sm text-gray-500">
                                            Verified Buyer
                                        </p>
                                    </div>
                                </footer>
                            </blockquote>
                            <blockquote className="bg-white p-6 rounded-lg shadow-md">
                                <p className="text-gray-700 mb-4">
                                    "The dining table is beautiful and sturdy. It fits perfectly in our home and looks amazing."
                                </p>
                                <footer className="flex items-center space-x-4">
                                    <img alt="Portrait of Chris hemsworth, a happy customer with short black hair and a beard" className="w-12 h-12 rounded-full object-cover" height="48" loading="lazy" src="https://storage.googleapis.com/a1aa/image/2b9747f5-deae-472f-4bd3-82d4592f3182.jpg" width="48" />
                                    <div>
                                        <p className="font-semibold text-gray-900">
                                            Chris Hemsworth
                                        </p>
                                        <p className="text-sm text-gray-500">
                                            Verified Buyer
                                        </p>
                                    </div>
                                </footer>
                            </blockquote>
                        </div>
                    </section>
                    <section id="Contact" className="mt-20 bg-gray-900 rounded-lg py-16 px-6 text-center text-white" >
                        <h2 className="text-3xl font-semibold mb-4">
                            Subscribe to Our Newsletter
                        </h2>
                        <p className="mb-8 max-w-xl mx-auto">
                            Get the latest updates on new products and upcoming sales.
                        </p>
                        <form action="#" className="max-w-md mx-auto flex flex-col sm:flex-row gap-4" onClick={(e) => { e.preventDefault(); handleSubscribe(); }}>
                            <label className="sr-only text-white-200" htmlFor="email">
                                Email address
                            </label>
                            <input onChange={(e) => setEmail(e.target.value)} className="text-white flex-grow px-4 py-3 rounded-md  focus:outline-none focus:ring-2 focus:ring-gray-300 border border-white" id="email" name="email" placeholder="Enter your email" required="" type="email" />
                            <button className="bg-white text-gray-900 font-semibold px-6 py-3 rounded-md hover:bg-gray-200 transition">
                                Subscribe
                            </button>
                            <Notification message={message} visible={showNotification} type={type} />
                        </form>
                    </section>
                </section>
            </main>
        </div>

    );
}

export default Body;

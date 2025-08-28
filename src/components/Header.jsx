import React, { useState } from 'react'
import { Link} from 'react-router-dom'
import { FaTimes } from 'react-icons/fa'
import Cart from '../pages/cart'
import { FaFilter } from 'react-icons/fa'
import MobileSearchPage from '../pages/mobileSearchPage'

function Header() {
    const [showSearch, setShowSearch] = useState(false)
    const CartItem = JSON.parse(sessionStorage.getItem("cart")) || []
    const[sidebar, setSidebar] = useState(false);

    return (
        <div >
            <header className="border-b border-gray-200 max-w-7xl mx-auto px-6 py-5">
                <div className="grid grid-cols-3">
                    <Link className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-900 flex " to={"/"}>
                        Furnite
                    </Link>
                    <nav className="hidden md:flex justify-center space-x-8 font-medium text-gray-700 ">
                        <Link className="hover:text-gray-900 transition" to={"/"}>
                            Home
                        </Link>
                        <a className="hover:text-gray-900 transition" href="#Categories">
                            Shop
                        </a>
                        <a className="hover:text-gray-900 transition" href="#About">
                            About
                        </a>
                        <a className="hover:text-gray-900 transition" href="#">
                            Contact
                        </a>
                    </nav>
                    <div className="flex items-center space-x-4  justify-end">

                        <div>
                            <Link to={"/mobileSearchPage"}
                                aria-label="Search"
                                className="text-gray-600 hover:text-gray-900 transition block sm:hidden"
                            >
                                <i className="fas fa-search fa-lg"></i>
                            </Link>
                            <div className='relative'>
                                <button
                                    onClick={() => setShowSearch(prev => !prev)}
                                    aria-label="Search"
                                    className="text-gray-600 hover:text-gray-900 transition hidden sm:block"
                                >
                                    <i className="fas fa-search fa-lg"></i>
                                </button>
                                <div className='leading-8'>
                                <input
                                    type="text"
                                    className={`rounded border px-3 absolute right-full mr-2 top-1/2 -translate-y-1/2 transition-all duration-300 hidden md:block ${showSearch ? "w-52 opacity-100 pointer-events-auto" : "w-0 opacity-0 pointer-events-none"}`}
                                    placeholder="Search...."
                                />
                                </div>
                            </div>

                        </div>


                        <Link to={"/profilePage"} aria-label="User Account" className="text-gray-600 hover:text-gray-900 transition">
                            <i className="fas fa-user fa-lg"></i>
                        </Link>

                        <Link to={"/cart"} aria-label="Shopping Cart" className="text-gray-600 hover:text-gray-900 transition relative">
                            <i className="fas fa-shopping-cart fa-lg"></i>
                            {CartItem.length > 0 && (
                                <span className="absolute -top-1 -right-2 bg-red-600 text-white text-xs rounded-full px-1.5">
                                    {CartItem.reduce((total, item) => total + item.qty, 0)}
                                </span>
                            )}
                        </Link>

                    </div>
                    <div className='flex justify-evenly relative ml-auto gap-7 w-fit border'>
                        <button className="md:hidden text-gray-700 hover:text-gray-900 focus:outline-nonefu" id="mobile-menu-button" onClick={() => setSidebar(!sidebar)}>
                            <i className="fas fa-bars fa-lg">
                            </i>
                        </button>
<<<<<<< HEAD
                        <div className={`fixed top-0 right-0 border leading-12 h-screen z-100 bg-white/10 backdrop-blur-md border-white/20 p-6 w-[200px] transform transition-transform duration-300 ${sidebar ? "translate-x-0" : "translate-x-full"}` }>
=======
                        <div className={`fixed top-0 right-0 leading-12 h-screen z-100 bg-white/10 backdrop-blur-md border-white/20 p-6 w-[200px] transform transition-transform duration-300 ${sidebar ? "translate-x-0" : "translate-x-full"}` }>
>>>>>>> cd5f88d (Dropdown Added)
                            <ul>
                                <button className='text-2xl' onClick={() => setSidebar(false)}><FaTimes/></button>
                                <li className='border-b ' >Home</li>
                                <li className='border-b'>Shop</li>
                                <li className='border-b'>About</li>
                                <li className='border-b'>Contact</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <nav className="md:hidden hidden border-t border-gray-200" id="mobile-menu">
                    <div className="px-6 py-4 space-y-3 font-medium text-gray-700">
                        <a className="block hover:text-gray-900 transition" href="#">
                            Home
                        </a>
                        <a className="block hover:text-gray-900 transition" href="#">
                            Shop
                        </a>
                        <a className="block hover:text-gray-900 transition" href="#">
                            About
                        </a>
                        <a className="block hover:text-gray-900 transition" href="#">
                            Contact
                        </a>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Header

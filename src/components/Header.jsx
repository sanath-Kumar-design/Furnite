import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaTimes } from 'react-icons/fa'
import { FaFilter } from 'react-icons/fa'
import MobileSearchPage from '../pages/MobileSearchPage'
import SideMenu from './Sidebar'
import { useNavigate } from 'react-router-dom'


function Header() {
    const navigate = useNavigate()
    const [showSearch, setShowSearch] = useState(false)
    const [sidebar, setSidebar] = useState(false)
    const CartItem = JSON.parse(sessionStorage.getItem("cart")) || []

    const onClickShop = () => {
        const section = document.getElementById("Categories");
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    }

    const onClickAbout = () => {
        const section = document.getElementById("About");
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    }
    const onClickContact = () => {
        const section = document.getElementById("Contact");
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    }

    return (
        <div >
            <header className="border-b border-gray-200 max-w-7xl mx-auto px-6 py-5">
                <div className="grid grid-cols-3">
                    <Link className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-900 flex " to={"/"}>
                        Furnite
                    </Link>
                    <nav className="hidden md:flex justify-center space-x-8 font-medium text-gray-700 ">
                        <Link className="hover:text-gray-900 transition" >
                            Home
                        </Link>
                        <Link className="hover:text-gray-900 transition" onClick={onClickShop}>
                            Shop
                        </Link>
                        <Link className="hover:text-gray-900 transition" onClick={onClickAbout}>
                            About
                        </Link>
                        <Link className="hover:text-gray-900 transition" onClick={onClickContact}>
                            Contact
                        </Link>
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
                    <div className='flex justify-evenly relative ml-auto gap-7 w-fit'>
                        <button className="md:hidden text-gray-700 hover:text-gray-900 focus:outline-nonefu cursor-pointer" id="mobile-menu-button" onClick={() => setSidebar(true)}>
                            <i className="fas fa-bars fa-lg">
                            </i>
                        </button>
                    </div>
                    <div className={`sidebar ${sidebar ? "open" : ""}`}>
                        <SideMenu setSidebar={setSidebar} />
                    </div>

                    {sidebar && (
                        <div
                            onClick={() => setSidebar(false)}
                            className="overlay"
                        ></div>
                    )}

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

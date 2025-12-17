import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div>
            <footer className="bg-gray-100 mt-20 py-10">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8 text-gray-700">
                    <div>
                        <h3 className="font-semibold text-gray-900 mb-4">
                            Furnite
                        </h3>
                        <p className="text-sm">
                            Your one-stop shop for modern and classNameic furniture to beautify your home.
                        </p>
                    </div>
                    <div>
                        <h4 className="font-semibold text-gray-900 mb-4">
                            Shop
                        </h4>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link className="hover:text-gray-900 transition" to={'/chair'}>
                                    Chairs
                                </Link>
                            </li>
                            <li>
                                <Link className="hover:text-gray-900 transition" to={'/table'}>
                                    Tables
                                </Link>
                            </li>
                            <li>
                                <Link className="hover:text-gray-900 transition" to={'/sofas'}>
                                    Sofas
                                </Link>
                            </li>
                            <li>
                                <Link className="hover:text-gray-900 transition" to={'/storage'}>
                                    Storage
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold text-gray-900 mb-4">
                            Company
                        </h4>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <a className="hover:text-gray-900 transition" href="#">
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a className="hover:text-gray-900 transition" href="#">
                                    Careers
                                </a>
                            </li>
                            <li>
                                <a className="hover:text-gray-900 transition" href="#">
                                    Contact
                                </a>
                            </li>
                            <li>
                                <a className="hover:text-gray-900 transition" href="#">
                                    Press
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold text-gray-900 mb-4">
                            Follow Us
                        </h4>
                        <div className="flex space-x-6 text-gray-600">
                            <a aria-label="Facebook" className="hover:text-gray-900 transition" href="#">
                                <i className="fab fa-facebook fa-lg">
                                </i>
                            </a>
                            <a aria-label="Twitter" className="hover:text-gray-900 transition" href="#">
                                <i className="fab fa-twitter fa-lg">
                                </i>
                            </a>
                            <a aria-label="Instagram" className="hover:text-gray-900 transition" href="#">
                                <i className="fab fa-instagram fa-lg">
                                </i>
                            </a>
                            <a aria-label="LinkedIn" className="hover:text-gray-900 transition" href="#">
                                <i className="fab fa-linkedin fa-lg">
                                </i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="mt-10 text-center text-sm text-gray-500">
                    © 2024 Furnite. All rights reserved.
                </div>
            </footer>
        </div>
    )
}

export default Footer

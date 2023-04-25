import React from 'react';
import { Link } from 'react-router-dom';

export default function Menu() {
    return (
        <div>
            <div id="navMenu" className="border-b">
                <nav className="mx-auto p-6 lg:flex lg:items-center lg:justify-between">
                    <div className="navMenu--logo flex items-center justify-between">
                        <Link to="/" className="cursor-pointer"> RMW Music </Link>

                        {/* Mobile menu button */}
                        <div className="flex lg:hidden">
                            <button type="button" className="text-gray-500 hover:text-gray-600 focus:text-gray-600 focus:outline-none" aria-label="toggle menu">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
                                </svg>

                                <svg xmlns="http://www.w3.org/2000/svg" className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Mobile Menu open: "block", Menu closed: "hidden" */}
                    <div className="hidden navMenu--menu block absolute inset-x-0 z-20 w-full bg-white px-6 py-4 shadow-md transition-all duration-300 ease-in-out lg:relative lg:top-0 lg:mt-0 lg:flex lg:w-auto lg:translate-x-0 lg:items-center lg:bg-transparent lg:p-0 lg:opacity-100 lg:shadow-none">
                        <div className="lg:-px-8 flex flex-col space-y-4 lg:mt-0 lg:flex-row lg:space-y-0">
                            <Link className="navMenu--menu_link mx-2 border-red-700 cursor-pointer hover:border-b" to="/bands">Bands</Link>
                            <Link className="navMenu--menu_link mx-2 border-red-700 cursor-pointer hover:border-b" to="/bands">Interviews</Link>
                            <Link className="navMenu--menu_link mx-2 border-red-700 cursor-pointer hover:border-b" to="/bands">Concerts</Link>
                            <Link className="navMenu--menu_link mx-2 border-red-700 cursor-pointer hover:border-b" to="/bands">Reviews</Link>
                            <Link className="navMenu--menu_link mx-2 border-red-700 cursor-pointer hover:border-b" to="/bands">About</Link>
                            <Link className="navMenu--menu_link mx-2 border-red-700 cursor-pointer hover:border-b" to="/bands">Contact</Link>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}
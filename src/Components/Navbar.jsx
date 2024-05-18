import React from "react";
import { Link } from "react-router-dom";
import brandName from "../Assets/images/brandname.png";
import twitter from "../Assets/images/twitter.png";
import telegram from "../Assets/images/telegram.png";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faBars);

const Navbar = () => {
  return (
    <div
      style={{
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: 50,
        backdropFilter: 'blur(10px)',
        fontFamily: 'Atma, sans-serif' // Specify the Atma font family here
      }}
      className="font-atma"
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={brandName} className="img-fluid" alt="Moye Logo" />
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <ul className="md:flex gap-4 hidden">
            <li>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <img src={twitter} className="img-fluid bg-white p-3 rounded-full" alt="Twitter" />
              </a>
            </li>
            <li>
              <a href="https://telegram.org" target="_blank" rel="noopener noreferrer">
                <img src={telegram} className="img-fluid bg-white p-3 rounded-full" alt="Telegram" />
              </a>
            </li>
          </ul>
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <FontAwesomeIcon icon={faBars} className="w-5 h-5" />
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul
            style={{
             
            }}
            className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:bg-transparent md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700"
          >
            <li>
              <a
                href="#about"
                className="block py-2 px-3 text-white hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#nomics"
                className="block py-2 px-3 text-white hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Moyenomics
              </a>
            </li>
            <li>
              <a
                href="#stats"
                className="block py-2 px-3 text-white hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Stats
              </a>
            </li>
            <li>
              <Link
                to="/presalepage"
                className="block py-2 px-3 text-white hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Presale
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

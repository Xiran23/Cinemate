import React from 'react'
import {Link } from "react-router-dom";

export const Footer = () => {
  return (
    

<footer classNameName="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
    <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <Link to="/" className="hover:underline">Flowbite™</Link>. All Rights Reserved.
    </span>
    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
            <button type="button" className="hover:underline me-4 md:me-6" onClick={() => window.open('https://instagram.com', '_blank')}>Instagram</button>
        </li>
        <li>
            <button type="button" className="hover:underline me-4 md:me-6" onClick={() => window.open('https://linkedin.com', '_blank')}>LinkedIN</button>
        </li>
        <li>
            <button type="button" className="hover:underline me-4 md:me-6" onClick={() => window.open('https://youtube.com', '_blank')}>Youtube</button>
        </li>
        <li>
            <button type="button" className="hover:underline" onClick={() => alert('Contact form coming soon!')}>Contact</button>
        </li>
    </ul>
    </div>
</footer>

  )
}

import React, { useState } from 'react'
import "./header.css";
import Link from '../../UI/Link/Link'
import { CgMenuRight } from "react-icons/cg";
import { RiCloseLargeFill } from "react-icons/ri";
import { FaS } from 'react-icons/fa6';


export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);


    return (
        <header 
            className='
                h-[80px] w-full bg-[#ECECEC] p-4
                flex items-center justify-between
            '
        >

            <a href="/" 
                className='
                
                '
            >
                <h2>Alexander Agu</h2>
            </a>
            

            <nav
                className='
                flex items-center justify-center
                '
            >
                <input type="checkbox" id='sidebar' className='hidden' />

                <label htmlFor="sidebar" onClick={()=> setMenuOpen(true)}>
                    <CgMenuRight />
                </label>

                <ul
                    className={`
                        h-[100dvh] w-[250px] fixed right-0 top-0 p-[1rem]
                        bg-black text-white
                        flex items-center justify-start flex-col gap-[1rem]
                        transform transition-transform duration-300 ease-in-out
                        ${menuOpen ? "translate-x-0" : "translate-x-full"}
                    `}
                >
                    <li>
                        <label htmlFor="sidebar" onClick={()=> setMenuOpen(false)}>
                            <RiCloseLargeFill />
                        </label>
                    </li>
                    <li>
                        <Link link='#home' name='Home' />
                    </li>
                    <li>
                        <Link link='#home' name='About' />
                    </li>
                    <li>
                        <Link link='#home' name='Projects' />
                    </li>
                    <li>
                        <Link link='#home' name='Contact' />
                    </li>
                </ul>
            </nav>

        </header>
    )
}
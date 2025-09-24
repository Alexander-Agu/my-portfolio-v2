import React from 'react'
import Link from '../../UI/Link/Link'

export default function Header() {
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
            className='flex items-center justify-center'
        >
            <ul
                className='
                    flex items-center justify-center flex-row gap-[1rem]
                '
            >
                <li>
                    <Link link='#home' name='Home' />
                </li>
                <li>
                    <Link link='#home' name='Home' />
                </li>
                <li>
                    <Link link='#home' name='Home' />
                </li>
                <li>
                    <Link link='#home' name='Home' />
                </li>
            </ul>
        </nav>

    </header>
  )
}
import { useEffect, useState } from 'react'
import "./header.css";
import Link from '../../UI/Link/Link'
import { CgMenuRight } from "react-icons/cg";
import { RiCloseLargeFill } from "react-icons/ri";


export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    // Handle scroll effect
    useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50 && !isScrolled) {
        setIsScrolled(true);
      } else if (window.scrollY <= 50 && isScrolled) {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isScrolled]);


    return (
        <header 
            className={`${isScrolled? "scrolled" : 'bg-[#ECECEC]'}
                h-[80px] w-full  p-4
                flex items-center justify-between
                fixed
            `}
        >

            <a href="/" 
                className='
                
                '
            >
                <h2 className='inter text-[1.5rem] font-bold'>Alexander Agu</h2>
            </a>
            

            <nav
                className='
                flex items-center justify-center
                '
            >

                <div className='md:hidden' onClick={()=> setMenuOpen(true)}>
                    <CgMenuRight />
                </div>

                <ul
                    className={` inter
                    fixed top-0 right-0 h-[100vh] w-[250px] bg-black text-white p-4 flex flex-col gap-4
                    transform transition-transform duration-300 ease-in-out
                    ${menuOpen ? "translate-x-0" : "translate-x-full"}

                    md:static md:translate-x-0 md:h-auto md:w-auto md:bg-transparent md:text-black md:flex-row md:gap-6
                    `}
                >
                    <li>
                        <div className='md:hidden'
                         onClick={()=> setMenuOpen(false)}>
                            <RiCloseLargeFill />
                        </div>
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
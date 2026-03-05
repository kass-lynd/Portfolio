"use client";
import Image from "next/image";
import Link from "next/link";
import "./nav.css";
import ContactButton from "./contactButton";

export default function Nav() {
    return (
        <nav className='nav-bar'>
            <div className='nav-container'>
                <Link href='/' className='logo'>
                    <Image src='/whiteIcon.svg' alt='Logo' width={75} height={75} />
                </Link>
                <ul className='nav-links'>
                    <li className='nav-item'>
                        <Link href='/home'>
                            <span className='nav-link'>
                                HOME
                                <span className='hover-dot'></span>
                            </span>
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link href='/about'>
                            <span className='nav-link'>
                                ABOUT
                                <span className='hover-dot'></span>
                            </span>
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link href='/projects'>
                            <span className='nav-link'>
                                PROJECTS
                                <span className='hover-dot'></span>
                            </span>
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link href='/case-study'>
                            <span className='nav-link'>
                                CASE STUDY
                                <span className='hover-dot'></span>
                            </span>
                        </Link>
                    </li>
                </ul>
                <ContactButton />
            </div>
        </nav>
    );
}

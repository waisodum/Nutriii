import React, { useEffect, useState } from 'react'
import '../Styles/Navbar.css'
import gsap from 'gsap'
import { BsRobot } from "react-icons/bs";
import Link from 'next/link';

function Navbar() {

    useEffect(() => {
        gsap.set('nav', {
            opacity: 0,
            y: -50,
        });
        gsap.set('.logo', {
            opacity: 0,
            // y: -50,
        });
        gsap.set('menu', {
            opacity: 0,
            // y: -50,
        });

        gsap.set('.chatBot',{
            scale: 0.9,
        })

        const tl = gsap.timeline();

        tl.to('nav',{
            opacity: 1,
            y: 0,
            duration: .2
        })
        tl.to('.logo',{
            opacity: 1,
            y: 0,
            duration: .5
        })
        tl.to('menu',{
            opacity: 1,
            y: 0,
            duration: .5
        }).to('.chatBot', {
            scale: 1,
            duration: 0.5
        })

    }, []);

    return (
        <nav>
            <Link href="#" className='logo'>
                Nutrii
            </Link>
            <menu>
                <div>
                    <a className='menu-options' href='.'>Locate Store</a>
                </div>
                <div>
                    <a className='menu-options' href='.'>Community</a>
                </div>
                <div>
                    <a className='menu-options' href='.'>Consult Specialist</a>
                </div>
                <div>
                    <a className='menu-options' href=".">Profile</a>
                </div>
            </menu>
            <Link href='/ChatBot' className='chatBot'><BsRobot /></Link>
        </nav>
    )
}

export default Navbar
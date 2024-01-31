import React, { useEffect } from 'react'
import '../Styles/Navbar.css'
import gsap from 'gsap'

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
        })

    }, []);

    return (
        <nav>
            <div className='logo'>
                Nutrii
            </div>
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
        </nav>
    )
}

export default Navbar
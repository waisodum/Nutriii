import React, { useEffect } from 'react'
import '../Styles/footer.css'
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Footer() {

    useEffect(() => {

        gsap.set('.footerMain', {
            scale: 0.5,
            opacity: 0.5,
            y: 60
        })

        const pinTrigger = ScrollTrigger.create({
            trigger: ".footerMain",
            pin: false,
            start: "top bottom",
            end: "bottom 0",
        });

        const ts = gsap.timeline();

        ts.to(".footer-inner", {
            scrollTrigger: {
                trigger: ".footerMain",
                start: pinTrigger?.start,
                end: pinTrigger?.end,
                scrub: .2,
                ease: "power3.inOut",
            },
            duration: 0.5,
            scale: 1.05,
            opacity: 1,
            y: 0
        });

        return() =>{
            ts.kill();
        }

    }, []);

    return (
        <div className='footerMain'>

            <div className='footer-inner'>
                
            </div>

        </div>
    )
}

export default Footer
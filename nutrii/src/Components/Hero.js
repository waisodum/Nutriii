import React, { useEffect } from 'react'
import '../Styles/hero.css'
import { FaArrowRight } from "react-icons/fa";
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Spline from '@splinetool/react-spline';


gsap.registerPlugin(ScrollTrigger);

function Hero() {

    useEffect(() => {

        gsap.set(".welcome", {
            opacity:  0,
            y: 50
        })

        const t = gsap.timeline();

        t.to('.arrow', {
            x: 10,
            duration: .5,
            ease: "power3.out",
        })

        const pinTrigger = ScrollTrigger.create({
            trigger: ".hero-main",
            pin: false,
            start: "top bottom",
            end: "bottom 0",
        });

        const ts = gsap.timeline();

        ts.to(".hero-sub", {
            scrollTrigger: {
                trigger: ".hero-main",
                start: pinTrigger?.start,
                end: pinTrigger?.end,
                scrub: .2,
                ease: "power3.inOut",
            },
            duration: .2,
            scale: 1,
            opacity: 1
        });

        ts.to('.welcome', {
            opacity: 1,
            y: 0,
            duration: 1
        })

        return () => {
            pinTrigger.kill();
            ts.kill();
        };

    }, [])

    return (
        <>
            <div className='hero-main'>

                <div className='welcome'>
                    <div className='background'></div>
                    <h1>Welcome to your personal nutrient assistant</h1><div className='bgvideo'></div>
                    <Spline scene="https://prod.spline.design/AMw74cXJXx2lp6Zk/scene.splinecode" />
                </div>

                <div className='hero-sub'>
                    <div className='hero-inner card'>
                    <Spline scene="https://prod.spline.design/FwPK5-tGGZJ4AZ7Z/scene.splinecode" />
                        <p className='mr-[0.5vw] '>Get your personalised Recommendations</p> <FaArrowRight className='arrow' />
                    </div>
                    <div className='info'>
                        <p>Receive curated content, such as recipes or product recommendations, based on your individual tastes and requirements for a more tailored and satisfying user engagement.</p>
                    </div>
                </div>
                <div className='hero-sub'>
                    <div className='info'>
                        <p> It's a personalized and innovative way to explore different cuisines and cooking styles, making every mealtime an adventurous and delightful culinary journey.</p>
                    </div>
                    <div className='hero-inner2 card'>
                        <p className='mr-[0.5vw]'>Try new recipies</p> <FaArrowRight className='arrow' />
                    </div>
                </div>

            </div>
        </>
    )
}

export default Hero
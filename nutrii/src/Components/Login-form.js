'use client'

import React, { useContext, useEffect, useState } from 'react'
import { myContext } from '../../Helper/Context';
import gsap from 'gsap'

function Login() {

    const {login, setLogin} = useContext(myContext);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const changeState = ()=>
    {
        setLogin(!login);
    }

    useEffect(() => {
        console.log('Effect triggered');
        const t = gsap.timeline();

        t.to('.sign-in-title', {
            x: 10,
            opacity: 1,
            duration: 1,
        })
    }, [])

    return (
        <div className="s3">
            <div className="sign-header-section">
                <div className="sign-in-title">
                    Heyy, Welcome Back!
                </div>

            </div>
            <div className="sign-buttons">
                <a href="#" className="login-w-button">
                    <img width="18" height="18" src="https://img.icons8.com/color/48/google-logo.png" alt="google-logo" />
                    <span>Sign in with Google</span>
                </a>
                <a href="#" className="login-w-button">
                    <img width="18" height="18" src="https://img.icons8.com/ios-filled/50/mac-os.png" alt="mac-os" />
                    <span>Sign in with Apple</span>
                </a>
            </div>
            <div className="slice-container">
                <div className="slice-text-c">
                    <div className="slicer"></div>
                    <div className="slice-text">Or with email</div>
                </div>
            </div>
            <form className="input-container">
                <input type="email" value={username} required placeholder="Email"
                    onChange={(e) => { setUsername(e.target.value) }} />
                <input type="password" value={password} required placeholder="Passowrd"
                    onChange={(e) => { setPassword(e.target.value) }} />
                <a href="#" className="alt-f">
                    Forgot Password ?
                </a>
                <button className='hover:rounded-[2vw] rounded-[1vw]'>
                    Sign in
                </button>
                <div href="#" className="alt-f-full">
                    Not a Member yet?
                    <p className="p-[.2vw] transition-all duration-1 ease-out border-blue-300 hover:border-b alt-f ml-[0.2vw]"
                    onClick={changeState}>
                        Sign up
                    </p>
                </div>
            </form>
        </div>
    )
}

export default Login
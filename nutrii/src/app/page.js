'use client'

import React, { useState } from 'react'

function Home() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="sign-in-container">
      <div className="sign-column s1">
        <div className="sign-column-face s2">
          <div className="s3">
            <div className="sign-header-section">
              <div className="sign-in-title">
                Heyy, Welcome Back!
              </div>
              {/* <div className="sign-in-title-alt">
                Lorem ipsum dolor sit amet
              </div> */}
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
              <input type="email" required placeholder="Email" 
              onChange={(e) => {setUsername(e.target.value)}} />
              <input type="password" required placeholder="Passowrd"
              onChange={(e) => {setPassword(e.target.value)}} />
              <a href="#" className="alt-f">
                Forgot Password ?
              </a>
              <button>
                Sign in
              </button>
              <div href="#" className="alt-f-full">
                Not a Member yet? 
                <a href="sign-up.html" className="alt-f ml-[0.5vw]">
                  Sign up
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="sign-column w2">
        <div className="intro-p">
          <div className="canvas-logo">

          </div>

          <div className="intro-content">
            <div className="intro-title">
              Welcome To Nutrii
            </div>

          </div>
        </div>
      </div>
    </div>

  )
}

export default Home
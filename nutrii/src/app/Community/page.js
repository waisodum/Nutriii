import React from 'react'
import Feed from '../components/Feed/Feed'
import Sidebar from '../components/Sidebar/Sidebar'
// import Topbar from '../components/topbar/Topbar'
import "./comm.css"

function page() {
  return (
    <>
      {/* <Topbar/> */}
      <div className="homeContainer">
        <Sidebar />
        <Feed/>
        
      </div>
    </>
  )
}

export default page

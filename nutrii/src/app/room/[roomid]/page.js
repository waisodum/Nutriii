'use client'
import React from 'react'
import { useParams } from 'next/navigation'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt'

function Page() {
  const {roomid}=useParams()
  const mymeeting=(element)=>{
  const appID=353472338
  const serverSecret='161c2c3b02a1ea49699400c9d27b7c41';
  const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomid,  `${Date.now()}`,  'salman');
const zc=ZegoUIKitPrebuilt.create(kitToken)
zc.joinRoom({
  container:element,
  scenario:{
    mode:ZegoUIKitPrebuilt.OneONoneCall,
  },
  sharedLinks:[
    {
      name:'Copy Link',
      url:`http://localhost:8000/room/${roomid}`
    }
  ],
screenSharingConfig:false,

})
  }
  return (
    <div className='flex  h-screen items-center justify-center'>   <div  ref={mymeeting}/> </div>
  )
}

export default Page
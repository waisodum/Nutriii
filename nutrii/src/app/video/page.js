'use client'
import React, { useState } from 'react'
import { useRouter } from "next/navigation";

function Video() {
    const [room, setRoom] = useState('')
    const router =useRouter()
async function handleSubmit(){
router.push(`/room/${room}`)
    }
  return (
    <div> <input onChange={(e)=>setRoom(e.target.value)} type='text'/> <button className='bg-black w-4 h-9'  onClick={handleSubmit}/> {room}</div>
  )
}

export default Video
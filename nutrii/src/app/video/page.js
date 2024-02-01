"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Spline from '@splinetool/react-spline';


function Video() {
  const [room, setRoom] = useState("");
  const router = useRouter();
  async function handleSubmit() {
    router.push(`/room/${room}`);
  }
  return (

    <div className="flex flex-col h-screen items-center justify-center">

      <div className="absolute hidden lg:visible -z-10">    <Spline scene="https://prod.spline.design/1DWlknSxC-a0UBJL/scene.splinecode" />
</div>
    
      <div className="bg-gray-50 items-center w-fit h-fit px-[2vw] py-[2vw] rounded-[1.5vw]">
      <div className=" mb-10 text-yellow-900 text-3xl"> Join Room or Create</div>
      <div className="flex flex-col">

        <input className="border-black rounded-xl p-2 border-2" placeholder="Enter your room Id." onChange={(e) => setRoom(e.target.value)} type="text" />{" "}
        <button className="bg-teal-200 mt-4 p-3 text-center  rounded-xl " onClick={handleSubmit} >JOIN ROOM</button> Your entered Id: {room}
      </div>
      </div>
    </div>
  );
}

export default Video;

"use client"

import "./profile.css";


import Sidebar from "../components/sidebar/Sidebar";
import product from "../components/product/product";
import { useState,useEffect } from "react";
import axios from "axios"

// import Rightbar from "../components/rightbar/Rightbar";

export default function Profile() {

  const [data,setData] =useState("")
  useEffect(() => {
    // Make a GET request using Axios
    axios.get('https://www.bigbasket.com/listing-svc/v2/products?type=ps&slug=dairy&page=1')
      .then(response => {
        // Extract the data from the response
        const result = response.data;

        // Update the state with the fetched data
        setData(result);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const products =[] 
  return (
    <>
   
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src="assets/post/3.jpeg"
                alt=""
              />
              <img
                className="profileUserImg"
                src="assets/person/7.jpeg"
                alt=""
              />
            </div>
         
            <div className="profileInfo">
                <h4 className="profileInfoName">Safak Kocaoglu</h4>
                <span className="profileInfoDesc">My Nutrii Record!</span>
            </div>
            <div className="Dietpref">
              <div className="text-2xl bg-white p-2 rounded-md border-black border-2" >Vegeterian</div>
              <div className="text-2xl bg-white p-2 rounded-md border-black  border-2">Lactose</div>
              <div className="text-2xl bg-white p-2 rounded-md border-black border-2">Jain</div>
              <div className="text-2xl bg-white p-2 rounded-md border-black border-2">GlutonFree</div>

            </div>
            <div className="flex">
              <div className="MyProduct m-[1vw]">
                <h1 className="font-bold text-3xl text-center">Your viewed Products</h1>
                <div className="flex  flex-wrap m-4">
                  {
                    <product name={data}/>
                  }
                  
                  {/* <div  className="productimageMain mt-5"> 
                    <img src = "assets/post/flourGlutfree.jpg" className="productimage rounded-md"/>
                    <div className="flex content-center text-white bg-black w-full rounded">gluton free wheat</div>
                    </div>
                  <div className="productimageMain  mt-5">
                  <img src = "assets/post/lactose-free-milk.jpg" className="productimage rounded-md"/>
                  <span className="flex content-center text-white bg-black w-full rounded m-auto px-2">Lactose free Milk</span>
                  </div>
                  <div className="productimageMain mt-5">
                  <img src = "assets/post/jain.jpeg" className="productimage rounded-md"/>
                  <span className="flex content-center text-white bg-black w-full rounded m-auto px-2">Jain Bhujia</span>
                  </div>
                  <div  className="productimageMain mt-5"> 
                    <img src = "assets/post/Halal-Meat.png" className="productimage rounded-md"/>
                    <div className="flex content-center text-white bg-black w-full rounded">Halal chicken</div>
                    </div>
                  <div className="productimageMain mt-5">
                  <img src = "assets/post/eggless-cake.jpg" className="productimage  rounded-md"/>
                  <span className="flex content-center text-white bg-black w-full rounded m-auto px-2">Eggless cake</span>
                  </div>
                  <div className="productimageMain mt-5">
                  <img src = "assets/post/glutenfree-noodles.jpeg" className="productimage rounded-md"/>
                  <span className="flex content-center text-white bg-black w-full rounded m-auto px-2">Glutenfreenoodles</span>
                  </div> */}

                </div>

              </div>
              {/* <div className="Recipes">
              <h1 className="font-bold text-3xl text-center">My Recipes</h1>

              </div> */}
            </div>
            
          </div>
          
        </div>
      </div>
    </>
  );
}
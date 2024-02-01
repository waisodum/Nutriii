'use client'

import React, { useState } from 'react'
import './store.css'
import Navbar from '@/Components/Navbar'
import { CiLocationArrow1 } from "react-icons/ci";
import TemplateComponent1 from '@/Components/Map';

function Store() {

  const storeData = [
    {
      "placeName": "Mata Ji Super Market",
      "address": "3R9M+3CM, Khar, Bandra West, Mumbai, Maharashtra 400052",
      "review": "",
      "url": "https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=f7kgyCYz_tWBpKpjaxankg&cb_client=search.gws-prod.gps&w=408&h=240&yaw=301.67587&pitch=0&thumbfov=100"
    },
    {
      "placeName": "Jayesh Super Market",
      "address": "3R9M+3CM, Khar, Bandra West, Mumbai, Maharashtra 400052",
      "review": "4.3",
      "url": "https://lh5.googleusercontent.com/p/AF1QipPm7R4nJ2WbMwSnDzNBzSHecluqXf7M5jLNB-ri=w426-h240-k-no"
    },
    {
      "placeName": "Gokul Super Market",
      "address": "Satyavati Shivlal Crawl, Golibar Rd, Khar Road East, Jawahar Nagar, Khar East, Mumbai, Maharashtra 400051",
      "review": "4.0",
      "url": "https://lh5.googleusercontent.com/xCD_310Ro-kA6viV1dCbp5SCkvLwwbSzbApAqUab5qqg9YadsqOTanHk75nmlfme=w426-h240-k-no"
    },
    {
      "placeName": "Food Point Super Market",
      "address": "Shop no 5, Jay niketan bldg, 16th Rd, Khar West, Mumbai, Maharashtra 400052",
      "review": "4.5",
      "url": "https://lh5.googleusercontent.com/p/AF1QipNVqGvr4fOdOI8ygnKod0Iwc8yi1qIIiHoER33o=w408-h544-k-no"
    },
    {
      "placeName": "Manek Stores Super Market",
      "address": "Manek Stores Super Market",
      "review": "4.2",
      "url": "https://lh3.googleusercontent.com/gps-proxy/AMy85WI3igHHZIS5yRoUC6YVG0Rxve2sNWjKtNu6sZZFijkgVPsFANZ-sE7rukWGhVh3EM_cOkJ5CqGqgKhWApF93BRkM_4UefRxfnyMz8FUCqSuU1SrAk5A0Mp4LtNh4MocPhSDVc8HLsF1EIBsixxWcOzI-eyC2Q9trVqBHBDq7fIZC3OgVbUIw-2a3YrOrh50ipdbdw=w408-h725-k-no"
    },
    {
      "placeName": "Gayatri Super Market",
      "address": "3R9V+QH2, Saibaba Road, Khar, Jawahar Nagar, Khar East, Mumbai, Maharashtra 400051",
      "review": "5.0",
      "url": "https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=pysMi_6tr_ndGdH-Fhr5Gw&cb_client=search.gws-prod.gps&w=408&h=240&yaw=281.88004&pitch=0&thumbfov=100"
    },
    {
      "placeName": "Hare Krishna Super Market",
      "address": "Hare Krishna Super Market",
      "review": "4.0",
      "url": "https://lh5.googleusercontent.com/p/AF1QipOOKa5cy2Ug1ndgcyQYfnOUQj7pVzQvZMxu4f24=w408-h306-k-no"
    },
    {
      "placeName": "Prince Super Market",
      "address": "16/B, Prince Super Market, Pali Rd, near HSBC Bank, Mumbai, Maharashtra 400050",
      "review": "4.1",
      "url": "https://lh5.googleusercontent.com/p/AF1QipN6Ny3NFwerbY1CUy4KiJhaSIXV90449HpESTSe=w408-h272-k-no"
    },
    {
      "placeName": "Choice super market",
      "address": "Shop No. 9, Silver Croft Building, Pali Mala Rd, Bandra West, Mumbai, Maharashtra 400050",
      "review": "4.7",
      "url": "https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=xSoGj_p25B97vQcdI2to6w&cb_client=search.gws-prod.gps&w=408&h=240&yaw=339.57632&pitch=0&thumbfov=100"
    },
    {
      "placeName": "Anandji Super Market",
      "address": "Shop No. 9, Silver Croft Building, Pali Mala Rd",
      "review": "4.0",
      "url": "https://lh5.googleusercontent.com/p/AF1QipN29ljFeEI8mwhSfMQc5I2l-7Z6lCFlxcfiUcbe=w408-h544-k-no"
    },
    {
      "placeName": "Benzer super market",
      "address": "Benzer super market",
      "review": "3.9",
      "url": "https://lh5.googleusercontent.com/p/AF1QipOBZ_jWwiXaqqwOPffCWR0b2jqCaHx0WWsWYUj4=w408-h544-k-no"
    },
    {
      "placeName": "Maharashtra Super Market",
      "address": "Building No.35, Shop, Suryodaya Co-Op Housing Society, No.12/13, Rd Number 2, Bandra East, Mumbai, Maharashtra 400051",
      "review": "4.0",
      "url": "https://lh5.googleusercontent.com/p/AF1QipNA7yriDG_ytSsVNJ7cKOhqfkEIUmmtdxcDe7_B=w408-h306-k-no"
    },
    {
      "placeName": "Mahavir Super Market",
      "address": "70, Kherwadi Rd, MHB Colony, Kherwadi, Bandra East, Mumbai, Maharashtra 400051",
      "review": "4.0",
      "url": "https://lh5.googleusercontent.com/p/AF1QipPO9usNrUXX4s1Ht7a2zqhZ1fzifKwubAny6lPK=w408-h306-k-no"
    },
    {
      "placeName": "Shenaz General Store",
      "address": "Haji Juma compound case no 36 skim, no 57, Sewri Cross Rd, Sewri West, Mumbai, 400015",
      "review": "4.0",
      "url": "https://lh3.googleusercontent.com/gps-proxy/AMy85WIMUjT_1gVhvQDzaHN2gGf-MZ5gedGMt-83haWgCISw3hLDR_87Kv8cIqvNv7NvX16Ce5oxX7cfgyj7LJ6rni3ipdvkKNrGPIN-pU6CYAOlyYPmvxBgLR7wIzo-Tp5UDx6dVQ2XW4ZR9G5KR1wSVKliwPGoP_sq79TU3kKHVIHI8e1RpdU6LMRPHbco0JnbOjWR1_A=w408-h306-k-no"
    },
    {
      "placeName": "Prince Super Market",
      "address": "Shop No 2, Saikrupa Bhavan, Plot No 357, Vashi, Mumbai, Maharashtra 400703",
      "review": "3.7",
      "url": "https://lh5.googleusercontent.com/p/AF1QipM8MNh7RoCwm8X4lEqt22CpuS3uaGu9M5OziJt2=w408-h272-k-no"
    },
    {
      "placeName": "Kalyan Station Grocery Market",
      "address": "64QJ+8C8, Bhanunagar Kalyan(West), Bhoiwada, Kalyan, Maharashtra 421301",
      "review": "4.0",
      "url": "https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=vWL3BuMeFc39QvFtJoIXNg&cb_client=search.gws-prod.gps&w=408&h=240&yaw=246.44206&pitch=0&thumbfov=100"
    }
  ]

  // const [place, setPlace] = useState(null)
  // const [imageSource, setImage] = useState(null)
  // const [address, setAddress] = useState(null)
  // const [ratings, setRatings] = useState(null)

  return (
    <>

      <Navbar />
      <div className='flex items-center justify-between'>
        <div className='store-main absolute left-1 top-[6.5vw] w-[37vw] px-[1vw] h-fit bg-slate-100 rounded'>
          <h1 className='font-semibold text-[2vw] flex items-center justify-center flex-col'>Stores:</h1>
          {storeData.map((store, index) => (
            <ul key={index} className='flex w-[100%] items-center justify-between my-[2vw]'>
              <div className='w-[20%]'><img src={store.url} className='rounded-[.5vw]' width={150} alt={store.placeName} /></div>
              <div className='w-[70%]'>
                <li className='font-bold text-black text-[1.3vw]'>{store.placeName}:</li>
                <li className='font-medium text-[1vw] flex justify-items-start items-center'>
                  <CiLocationArrow1 />: {store.address}
                </li>
                <li className='font-semibold text-[1.1vw]'>Ratings: {store.review}</li>
              </div>
              <hr className='my-2 border-t-2 border-gray-500' />
            </ul>
          ))}
        </div>
        <TemplateComponent1/>
        </div>

    </>
  )
}

export default Store
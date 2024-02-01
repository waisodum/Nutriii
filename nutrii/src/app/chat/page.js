"use client";
import Chat from "@/Components/Chat";
import axios from "axios";
import React, { useEffect, useState } from "react";

function Users() {
  const [users, setusers] = useState([]);
  const [loading, setloading] = useState(true)
  const [Id, setid] = useState('')
  const [Chatpalet, setChatpalet] = useState(true)
  const [name, setname] = useState('')

  useEffect(async () => {
    async function fetchData() {
      const token = await localStorage.getItem("Token");
      try {
        const { data } = await axios.get(
          "http://localhost:8000/search?search=",
          { headers: { Authorization: token } }
          );
          // console.log(data);
          setloading(false)
          await setusers(data);
          setid(users[0]._id)
          setChatpalet(true)
        } catch (error) {
          console.log(error);
        }
      }
     await fetchData();
    }, []);

if (loading) {
  return(<>loading</>)
}
 async function handleClick(id,name) {
   setid((e) => {if (e == id) {setChatpalet(false);return "";} else {setChatpalet(true);return id;}});
   setname(name)


  }
  return (
    // <>
    //   {users.map((e) => (
    //     <div onClick={()=>{handleClick(e._id)}}>{e.firstname}</div>
    //   ))}
    //   {Chatpalet&&<Chat id={Id}/>}
    // </>

    <div class="center">
    <div className="contacts ">
      <i class="fas fa-bars fa-2x"></i>
      <h2>
        Contacts
      </h2>
  {users.map((e,i)=>{
  return(<div class="contact" onClick={()=>{handleClick(e._id,e.firstname)}}>
  <div class="pic danvers"></div>
  {/* <div class="badge">
    {i*Math.floor(Math.random()*3)+1}
  </div> */}
  <div class="name text-center">
  {e.firstname}
  </div>
  {/* <div class="message">
    Hey Peter Parker, you got something for me?
  </div> */}
  </div>)
  })}
      
    </div>
    {Chatpalet&&<Chat id={Id} name={name}/>}  </div>
  );
}

export default Users;

// import React, { useEffect } from 'react'
// var apiky='2edDC-tbvZvuciBWLDkzTyPhQfQzvKcYj8Cy14ql_SU'
// function page() {
// const baseurl= 'https://api.unsplash.com/search/photos'
// useEffect(() => {

// }, [])

//   return (
//     <div>page</div>
//   )
// }
// const apiky='2edDC-tbvZvuciBWLDkzTyPhQfQzvKcYj8Cy14ql_SU'
// export default page

"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./search.css";

const UnsplashImage = () => {
  const [imageData, setImageData] = useState(null);
  const [error, setError] = useState(null);
  const accessKey = "2edDC-tbvZvuciBWLDkzTyPhQfQzvKcYj8Cy14ql_SU"; // Replace with your Unsplash API access key
  const prompt = "pasta"; // Replace with your prompt
  const [resData, setResData] = useState("");
  const [dishName, setDishName] = useState("");

  //   const [userData,setUserData] = useState("");
  const userAllergy = [
    "Lactose Intolerance",
    "Glutian Allergy",
    "having allergy with Dairy product",
  ];

  const handlePrompt = (e) => {
    setDishName(e.target.value);
    console.log(e.target.value);
  };

  //   useEffect(() => {
  const fetchData = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        "https://api.unsplash.com/photos/random",
        {
          params: {
            query: dishName,
            client_id: accessKey,
          },
        }
      );
      setImageData(response.data);
      console.log(response);

      // give me a healthy recipe of pasta keeping in mind I am having "Lactose Intolerance allergy" ,"Glutian Allergy","having allergy with Dairy product" negative prompt : dont give responce containg ** ,use number instied while defining steps
      axios
        .get(
          `http://localhost:4000/?question=Hello, give me a healthy recipe for ${dishName} keeping in mind I have allergies to Lactose Intolerance, Gluten, and Dairy products. Also, use numbers instead of defining steps. And give response of related products if ${dishName} doesnt exist`
        )
        .then((res) => {
          setResData(res.data);
          console.log(res.data);
        })
        .catch((error) => {
          setError(error.message);
        });
    } catch (error) {
      setError(error.message);
    }
  };

  const formatText = (text) => {
    // Assuming '**' is used for bold
    const boldRegex = /\*\*(.*?)\*\*/g;
    const textWithBold = text.replace(boldRegex, '<strong>$1</strong>');

    // Assuming lines starting with '*' denote list items
    const listRegex = /^\s*\*\s*(.*)$/gm;
    const textWithList = textWithBold.replace(listRegex, '<li>$1</li>');

    return { __html: `<ul>${textWithList}</ul>` };
  };

  return (
    <div>
      <h1 className="genHeading">
        Generate Your
        <br /> Ai Generated Recipe
      </h1>

      <form className="input-container">
        <input
          type="text"
          required
          placeholder="Enter your dish"
          onChange={handlePrompt}
        />
        <button
          onClick={fetchData}
          className="hover:rounded-[2vw] rounded-[1vw]"
        >
          Get Recipe
        </button>
      </form>

      {error && <p>Error: {error}</p>}
      {imageData && (
        <div className="imageContainer">
          <img src={imageData.urls.regular} alt={imageData.alt_description} />
        </div>
      )}
      <div className="resText">
        {/* <p>{resData}</p> */}
        <div
          className="resText"
          dangerouslySetInnerHTML={formatText(resData)}
        />
      </div>
    </div>
  );
};

export default UnsplashImage;

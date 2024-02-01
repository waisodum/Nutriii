'use client'
import "./share.css";
// import {PermMedia, Label,Room, EmojiEmotions} from "@material-ui/icons"
import PermMediaIcon from '@mui/icons-material/PermMedia';
import LabelIcon from '@mui/icons-material/Label';
import RoomIcon from '@mui/icons-material/Room';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import { useState } from "react";

export default function Share() {
  
  const [uploadedProducts, setUploadedProducts] = useState([]); // New state for storing uploaded products
  const [formData, setFormData] = useState({
    description: '',
    
    productImage: null,
  });



  async function handleChange (e)  {
    const { name, value, type } = e.target;
    // Handle file input separately
    

      setFormData({ ...formData, description: value });

  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    
    console.log('Form data to send:', formData);


await axios.post("http://localhost:80/upload",formData, {
  headers: {
    'Content-Type': 'multipart/form-data',
  },
});


fetch('http://localhost:80/Api').then((y)=>{
 return y.json()
})
.then((x)=>{
  console.log(x);
})
    setUploadedProducts([...uploadedProducts, formData]);

    // Clear the form fields
    setFormData({
      description: '',
      productImage: null,
    });
  };
// // State for storing uploaded products
// const [uploadedProducts, setUploadedProducts] = useState([]);
// // State for form data
// const [formData, setFormData] = useState({
//   description: '',
//   productImage: null,
// });

// // Handle input change
// const handleInputChange = (e) => {
//   const { name, value, type } = e.target;

//   // Handle file input separately
//   setFormData({ ...formData, [name]: value });
// };

// // Handle form submission
// const handleSubmit = async (e) => {
//   e.preventDefault();

//   console.log('Form data to send:', formData);

//   try {
//     // Make a POST request to upload data
//     await axios.post("http://localhost:80/upload", formData, {
//       headers: {
//         'Content-Type': 'multipart/form-data',
//       },
//     });

//     // Fetch data from another API
//     const response = await fetch('http://localhost:80/Api');
//     const data = await response.json();
//     console.log(data);

//     // Update the list of uploaded products
//     setUploadedProducts([...uploadedProducts, formData]);

//     // Clear the form fields
//     setFormData({
//       description: '',
//       productImage: null,
//     });
//   } catch (error) {
//     console.error('Error uploading data:', error);
//     // Handle error, show a message to the user, etc.
//   }
// };

  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img className="shareProfileImg" src="/assets/person/1.jpeg" alt="" />
          <input
          type="text"
          required
            placeholder="What's in your mind Safak?"
            className="shareInput"
            value={formData.description}
            onChange={handleChange}
          />
        </div>
        <hr className="shareHr"/>
        <div className="shareBottom">
        <form onSubmit={handleSubmit}>
            <div className="shareOptions">
                <div className="shareOption">
                    <PermMediaIcon htmlColor="tomato" className="shareIcon"/>
                    <input
              type="file"
              required
              id="productImage"
              name="productImage"
              onChange={handleChange}
              accept="image/*" className="shareOptionText" />Post your experience
                </div>
             
            </div>
            <button type="submit" className="shareButton">Share</button>
            </form>
        </div>
      </div>
    </div>
  );
}

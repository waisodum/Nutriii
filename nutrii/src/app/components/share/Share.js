'use client'
import "./share.css";
// import {PermMedia, Label,Room, EmojiEmotions} from "@material-ui/icons"
import PermMediaIcon from '@mui/icons-material/PermMedia';
import LabelIcon from '@mui/icons-material/Label';
import RoomIcon from '@mui/icons-material/Room';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import { useState } from "react";

export default function Share({setfirst}) {
  
  const [uploadedProducts, setUploadedProducts] = useState([]); 
  const [text, settext] = useState('')// New state for storing uploaded products
  const [file, setfile] = useState(null)
  const [formData, setFormData] = useState({
    id: 1,
      desc: "",
      photo: "",
      date: "",
      userId:null ,
      like: null,
      comment:null,
  });



  async function handleChange (e)  {
    const { name, value, type } = e.target;
    // Handle file input separately
    

      settext(value)

  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    setFormData({
      id:Date.now().toString(),
       desc: text,
      photo: file,
      date: Date.now(),
      userId:Date.now() ,
      like: null,
      comment:null,
    })
    console.log('Form data to send:', formData);

  }
function handlephoto(e) {
  console.log(e.target.file);

}
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
                onChange={(e) => {
                    // Perform actions on file selection if needed
                    setfile(e.target.files[0])
                }}
                accept="image/*"
            />
            Post your experience
        </div>
    </div>
    <button type="submit" className="shareButton">Share</button>
</form>
        </div>
      </div>
    </div>
  );
}

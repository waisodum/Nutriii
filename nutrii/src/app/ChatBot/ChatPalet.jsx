import React from 'react'

const ChatPalet = ({chatData}) => {
  return (
    <div style={{display:"flex",marginBottom:"2rem"}}>
        <div className="" style={{width:"2rem",height:"2rem",borderRadius:"50%"}}><img src="/imgs/chatProfile.jpg" alt=""/></div>
        <div className="">
            <p>{chatData}</p>
        </div>

    </div>
  )
}

export default ChatPalet
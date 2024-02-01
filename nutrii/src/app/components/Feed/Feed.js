import Post from "../post/Post";
import Share from "../share/Share";
import "./feed.css";
import { Posts } from "../../dummyData";

export default function Feed() {
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {Posts.map((p) => (
          <Post key={p.id} post={p}/>
        ))}
        <h3 className="text-center w-[100%]">This is the end of your feed</h3>
      </div>
    </div>
  );
}
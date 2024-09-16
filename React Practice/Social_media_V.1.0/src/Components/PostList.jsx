import { useContext } from "react";
import Post from "./Post";
import { PostListData } from "../Store/Post-List-Store";

const PostList = () => {
  const { postList } = useContext(PostListData);
  
  return (
    <>
      {postList.map((post) => (
        <Post key={post.id} postData={post}/>
      ))}
    </>
  );
};

export default PostList;

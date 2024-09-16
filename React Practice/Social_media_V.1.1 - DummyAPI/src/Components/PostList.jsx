import { useContext } from "react";
import WelcomeMsg from "./WelcomeMsg";
import Post from "./Post";
import { PostListData } from "../Store/Post-List-Store";

const PostList = () => {
  const { postList, addMultiplePosts } = useContext(PostListData);

  const handleOnFetch = () => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        addMultiplePosts(data.posts);
      })
      .then(alert("30 New Posts Updated Succesfully!"));
  };

  return (
    <>
      {postList.length === 0 && (
        <WelcomeMsg onGetPostClick={handleOnFetch}></WelcomeMsg>
      )}
      {postList.map((post) => (
        <Post key={post.id} postData={post} />
      ))}
    </>
  );
};

export default PostList;

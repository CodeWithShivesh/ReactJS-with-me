import { useContext } from "react";
import WelcomeMsg from "./WelcomeMsg";
import Post from "./Post";
import LodingSppiner from "./LodingSppiner";
import { PostListData } from "../Store/Post-List-Store";

const PostList = () => {
  const { postList, fectching } = useContext(PostListData);

  // const [dataFetched, setDataFetched] = useState(false);

  // if (!dataFetched) {
  //   fetch("https://dummyjson.com/posts")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       addMultiplePosts(data.posts);
  //     });
  //   setDataFetched(true);
  // }

  const handleOnFetch = () => {
    alert("30 New Posts Updated Succesfully!");
  };

  return (
    <>
      {fectching && <LodingSppiner />}
      {!fectching && postList.length === 0 && <WelcomeMsg></WelcomeMsg>}
      {!fectching &&
        postList.map((post) => <Post key={post.id} postData={post} />)}
    </>
  );
};

export default PostList;

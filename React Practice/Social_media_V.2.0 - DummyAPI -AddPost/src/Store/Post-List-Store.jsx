import { createContext, useReducer, useEffect, useState } from "react";

export const PostListData = createContext({
  postList: [],
  addPost: () => {},
  fectching: false,
  deletePost: () => {},
});

const postListReducer = (currList, action) => {
  let newPostList = currList;
  if (action.type === "DELETE_POST") {
    newPostList = currList.filter((post) => post.id !== action.payload.postId);
  } else if (action.type === "ADD_MULTIPLE_POSTS") {
    newPostList = action.payload.posts;
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currList];
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, []);
  const [fectching, setFectching] = useState(false);

  const addPost = (post) => {
    console.log("inside addpost");
    dispatchPostList({
      type: "ADD_POST",
      payload: post,
    });
  };

  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };

  const addMultiplePosts = (posts) => {
    dispatchPostList({
      type: "ADD_MULTIPLE_POSTS",
      payload: {
        posts,
      },
    });
  };

  useEffect(() => {
    setFectching(true);
    const controller = new AbortController();
    const signal = controller.signal;
    fetch("https://dummyjson.com/posts", { signal })
      .then((res) => res.json())
      .then((data) => {
        addMultiplePosts(data.posts);
        setFectching(false);
      });

    return () => {
      console.log("Cleaning up");
      controller.abort();
    };
  }, []);

  return (
    <PostListData.Provider
      value={{
        postList,
        addPost,
        fectching,
        deletePost,
      }}
    >
      {children}
    </PostListData.Provider>
  );
};

// const DEFAULT_POST_LIST = [
//   {
//     id: "1",
//     title: "I am going Mumbai",
//     body: "Going mumbai for making fun, there i will enjoy beach and film city",
//     reactions: 2,
//     userId: "User-3",
//     tags: ["enjoy", "Mumbai", "vacation"],
//   },
//   {
//     id: "2",
//     title: "Pass ho gaye bhai",
//     body: "4 saal ki masti k baad bhi ho gaye h pass, Hard to believe",
//     reactions: 15,
//     userId: "User-8",
//     tags: ["B.tech", "passed"],
//   },
// ];

export default PostListProvider;

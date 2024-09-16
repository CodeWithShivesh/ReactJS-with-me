import { useContext, useRef } from "react";
import { PostListData } from "../Store/Post-List-Store";

const CreatePost = () => {
  const { addPost } = useContext(PostListData);

  const userIdElement = useRef();
  const titleElement = useRef();
  const bodyElement = useRef();
  const reactionElement = useRef();
  const tagElement = useRef();

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const userId = userIdElement.current.value;
    const title = titleElement.current.value;
    const body = bodyElement.current.value;
    const reaction = reactionElement.current.value;
    const tag = tagElement.current.value.split(" ");
    {
      alert("Do you want to add the Post ? ");
    }
    userIdElement.current.value = "";
    titleElement.current.value = "";
    bodyElement.current.value = "";
    reactionElement.current.value = "";
    tagElement.current.value = "";

    console.log("fetching is started");
    fetch("https://dummyjson.com/posts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: title,
        body: body,
        reactions: reaction,
        userId: userId,
        tags: tag,
      }),
    })
      .then((res) => res.json())
      .then((post) => addPost(post))
      .then(console.log("fetching is stop- add post called "));

    // addPost(userId, title, body, reaction, tag);
  };

  return (
    <>
      <form className="cPost" onSubmit={handleOnSubmit}>
        <div className="mb-3">
          <label htmlFor="userName" className="form-label">
            UserName
          </label>
          <input
            type="text"
            ref={userIdElement}
            className="form-control"
            id="userName"
          />
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            ref={titleElement}
            className="form-control"
            id="title"
          />
          <label htmlFor="body" className="form-label">
            Post Description
          </label>
          <input
            type="text"
            ref={bodyElement}
            className="form-control"
            id="body"
          />
          <label htmlFor="reaction" className="form-label">
            No. of Reactions
          </label>
          <input
            type="text"
            ref={reactionElement}
            className="form-control"
            id="reaction"
          />
          <label htmlFor="tags" className="form-label">
            Tags
          </label>
          <input
            type="text"
            ref={tagElement}
            className="form-control"
            id="tags"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Post
        </button>
      </form>
    </>
  );
};

export default CreatePost;

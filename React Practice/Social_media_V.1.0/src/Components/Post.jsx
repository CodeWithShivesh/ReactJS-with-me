import { useContext } from "react";
import { TiDeleteOutline } from "react-icons/ti";
import { PostListData } from "../Store/Post-List-Store";

const Post = ({ postData }) => {
  const { deletePost } = useContext(PostListData);

  return (
    <>
      <div
        className="card post"
        style={{ width: "60rem", border: "3px solid black" }}
      >
        <div className="card-body">
          <h5 className="card-title">
            {postData.title}
            <span
              className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
              onClick={() => {
                alert("Are you sure want to delete this ?");
                deletePost(postData.id);
              }}
            >
              <TiDeleteOutline />
            </span>
          </h5>
          <p className="card-text">{postData.body}</p>
          {postData.tags.map((tag) => (
            <span key={tag} className="badge text-bg-info hashtag">
              {tag}
            </span>
          ))}
          <div className="alert alert-success reaction" role="alert">
            Reactions: {postData.reactions}
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;

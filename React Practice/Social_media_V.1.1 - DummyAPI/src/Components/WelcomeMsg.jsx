const WelcomeMsg = ({ onGetPostClick }) => {
  return (
    <>
      <div className="px-4 py-5 my-5 text-center">
        <h1 className="display-5 fw-bold text-body-emphasis">
          There are no post available!
        </h1>
        <div className="col-lg-6 mx-auto">
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <button type="button" className="btn btn-primary btn-lg px-4 gap-3" onClick={onGetPostClick}>
              Fetch Posts
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default WelcomeMsg;

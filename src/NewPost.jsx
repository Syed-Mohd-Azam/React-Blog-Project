const NewPost = ({ postTitle, setPostTitle, postBody, setPostBody }) => {
  return (
    <>
      <main className="NewPost">
        <h2>New Post</h2>
        <form className="newPostForm" onSubmit={handleSubmit}>
          <label htmlFor="PostTitle">Post Title</label>
          <input
            required
            type="text"
            placeholder="Post Title"
            id="PostTitle"
            value={postTitle}
            onChange={(e) => setPostTitle(e.target.value)}
          />
          <label htmlFor="PostBody">Post Body</label>
          <textarea
            required
            placeholder="Post Body"
            id="PostBody"
            value={postBody}
            onChange={(e) => setPostBody(e.target.value)}
          />
        </form>
      </main>
    </>
  );
};
export default NewPost;

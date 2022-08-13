import './Post.css'
function Post({ userId, title, body }) {
  return (
    <div className="post">
      <h2>{title}</h2>
      <p>{body}</p>
      <p>{`User id: ${userId}`}</p>
    </div>
  )
}
export default Post

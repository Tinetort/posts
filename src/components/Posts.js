import { useEffect, useState } from 'react'
import Post from './Post'
const API_URL = 'https://jsonplaceholder.typicode.com/posts'
function Posts() {
  const [post, setPost] = useState([])
  const [error, setError] = useState('')
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((json) => setPost(json))
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false))
  }, [])

  if (error) {
    return <h1>Error: {error}</h1>
  }
  return (
    <>
      <h1>Posts</h1>
      <hr />
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        post.map((post) => <Post {...post} key={post.id} />)
      )}
    </>
  )
}

export default Posts

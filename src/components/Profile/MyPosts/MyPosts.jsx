import Post from './Post/Post'
import styles from './MyPosts.module.css'

const MyPosts = () => {
  return (
    <div>
      My Posts
      <div>
        <textarea></textarea>
        <button>Add Post</button>
      </div>
      <Post message="Hello, it's my first post" countLike="22 " />
      <Post message="How are you?" countLike="14 " />
    </div>
  )
}

export default MyPosts
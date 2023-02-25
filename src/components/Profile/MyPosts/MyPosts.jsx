import Post from './Post/Post'
import styles from './MyPosts.module.css'

const MyPosts = () => {
  return (
    <div className={styles.postsBlock}>
      <h3>
        My Posts
      </h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <button>Add Post</button>
      </div>
      <Post message="Hello, it's my first post" countLike="22 " />
      <Post message="How are you?" countLike="14 " />
    </div>
  )
}

export default MyPosts
import Post from './Post/Post'
import styles from './MyPosts.module.css'

const MyPosts = () => {

  const postsData = [
    { id: 1, postText: 'Hello, it\'s my first post', likesCount: 22 },
    { id: 2, postText: 'How are you?', likesCount: 14 }
  ]

  const postsElements = postsData
    .map(el => <Post message={el.postText} id={el.id} likesCount={el.likesCount} />)

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
      {postsElements}
    </div>
  )
}

export default MyPosts
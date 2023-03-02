import Post from './Post/Post'
import styles from './MyPosts.module.css'

const MyPosts = (props) => {

  const postsElements = props.posts.map(el => <Post message={el.message} id={el.id} likesCount={el.likesCount} />)

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
import Post from './Post/Post'
import styles from './MyPosts.module.css'
import React from 'react'

const MyPosts = (props) => {

  const postsElements = props.posts.map(el => <Post message={el.message} id={el.id} likesCount={el.likesCount} />)

  const newPostElement = React.createRef()

  const addPost = () => {
    props.addPost()
  }

  const onPostChange = () => {
    const text = props.newPostText.current.value
    props.updateNewPostText(text)
  }

  return (
    <div className={styles.postsBlock}>
      <h3>
        My Posts
      </h3>
      <div>
        <div>
          <textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText} />
        </div>
        <button onClick={addPost}>Add Post</button>
      </div>
      {postsElements}
    </div>
  )
}

export default MyPosts
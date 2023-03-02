import styles from './Post.module.css'

const Post = (props) => {
  return (
    <div className={styles.item}>
      <img src="https://i.pinimg.com/236x/cc/9a/43/cc9a4394ed75d03100ddc4e72334dbba.jpg" alt="avatar" />
      {props.message}
      <div>
        <button>{props.likesCount} Like</button>
      </div>
    </div>
  )
}

export default Post
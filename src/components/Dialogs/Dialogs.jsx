import DialogItem from './DialogItem/DialogItem'
import styles from './Dialogs.module.css'
import Message from './Message/Message'

const Dialogs = (props) => {

  const dialogsElements = props.state.dialogs.map(el => <DialogItem name={el.person} id={el.id} />)
  const messagesElements = props.state.messages.map(el => <Message message={el.message} id={el.id} />)

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={styles.messages}>
        {messagesElements}
      </div>
    </div>
  )
}

export default Dialogs
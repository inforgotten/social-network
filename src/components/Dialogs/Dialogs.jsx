import { NavLink } from 'react-router-dom'
import styles from './Dialogs.module.css'

const DialogItem = (props) => {
  const path = '/dialogs/' + props.id

  return (
    <div className={styles.dialog}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  )
}

const Message = (props) => {
  return (
    <div className={styles.message}>{props.message}</div>
  )
}

const Dialogs = (props) => {

  const dialogsData = [
    { id: 1, person: 'Sinji' },
    { id: 2, person: 'Asuka' },
    { id: 3, person: 'Rei' },
    { id: 4, person: 'Misato' }
  ]

  const messages = [
    { id: 1, message: 'Hi' },
    { id: 2, message: 'How are you?' },
    { id: 3, message: 'I love you!' }
  ]

  const dialogsElements = dialogsData
    .map(el => <DialogItem name={el.person} id={el.id} />)


  const messagesElements = messages
    .map(el => <Message message={el.message} id={el.id} />)

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
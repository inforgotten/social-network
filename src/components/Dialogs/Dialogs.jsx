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
  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsItems}>
        <DialogItem name="Sinji" id="1" />
        <DialogItem name="Asuka" id="2" />
        <DialogItem name="Rei" id="3" />
        <DialogItem name="Misato" id="4" />
      </div>
      <div className={styles.messages}>
        <Message message="Hi" />
        <Message message="How are you?" />
        <Message message="I love you!" />
      </div>
    </div>
  )
}

export default Dialogs
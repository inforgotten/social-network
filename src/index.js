import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'

const postsData = [
  { id: 1, postText: 'Hello, it\'s my first post', likesCount: 22 },
  { id: 2, postText: 'How are you?', likesCount: 14 }
]

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

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App postsData={postsData} dialogsData={dialogsData} messages={messages} />)
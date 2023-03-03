import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App'
import { addPost, subscribe, updateNewPostText } from './redux/state'
import state from './redux/state'

const root = ReactDOM.createRoot(document.getElementById('root'))
const renderEntireTree = (state) => {
  root.render(
    <BrowserRouter>
      <React.StrictMode>
        <App state={state} addPost={addPost} updateNewPostText={updateNewPostText} />
      </React.StrictMode>
    </BrowserRouter>)
}

renderEntireTree(state)

subscribe(renderEntireTree)
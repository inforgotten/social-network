import { Route, Routes } from 'react-router-dom'
import './App.css'
import Dialogs from './components/Dialogs/Dialogs'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import News from './components/News/News'
import Profile from './components/Profile/Profile'
import Settings from './components/Settings/Settings'

const App = (props) => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <div className='app-wrapper-content'>
        <Routes>
          <Route path="/profile/*" element={<Profile
            profilePage={props.state.profilePage}
            addPost={props.addPost}
            updateNewPostText={props.updateNewPostText}
          />} />
          <Route path="/dialogs/*" element={<Dialogs state={props.state.dialogsPage} />} />
          <Route path="/news/*" element={<News />} />
          <Route path="/settings/*" element={<Settings />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
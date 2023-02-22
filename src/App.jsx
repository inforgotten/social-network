import './App.css';

const App = () => {
  return (
    <div className='app-wrapper'>
      <header className='header'>
        <img src="https://i.pinimg.com/originals/98/3a/35/983a35c9ff75b3fef9ae3e25a6ae007c.png" alt="logo"/>
      </header>
      <nav className='navbar'>
        <div>
          <a href="#">Profile</a>
        </div>
        <div>
          <a href="#">Messages</a>
        </div>
        <div>
          <a href="#">News</a>
        </div>
        <div>
          <a href="#">Settings</a>
        </div>
      </nav>
      <div className='content'>
        <div>
          <img
            src="https://c4.wallpaperflare.com/wallpaper/994/938/405/anime-manga-anime-girls-simple-background-wallpaper-preview.jpg"
            alt="wallpaper"/>
        </div>
        <div>
          ava + description
        </div>
        <div>
          My Posts
          <div>
            New Post
          </div>
          <div>
            Post 1
          </div>
          <div>
            Post 2
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
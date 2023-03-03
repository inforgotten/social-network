let renderEntireTree = () => {
  console.log('State changed')
}

const state = {
  profilePage: {
    posts: [
      { id: 1, message: 'Hello, it\'s my first post', likesCount: 22 },
      { id: 2, message: 'How are you?', likesCount: 14 }
    ],
    newPostText: 'something'
  },
  dialogsPage: {
    dialogs: [
      { id: 1, person: 'Sinji' },
      { id: 2, person: 'Asuka' },
      { id: 3, person: 'Rei' },
      { id: 4, person: 'Misato' }
    ],
    messages: [
      { id: 1, message: 'Hi' },
      { id: 2, message: 'How are you?' },
      { id: 3, message: 'I love you!' }
    ]
  }
}

export const addPost = () => {
  const newPost = {
    id: 5,
    message: state.profilePage.newPostText,
    likesCount: 0
  }
  state.profilePage.posts.push(newPost)
  state.profilePage.newPostText = ''
  renderEntireTree(state)
}

export const updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText
  renderEntireTree(state)
}

export const subscribe = (observer) => {
  renderEntireTree = observer
}

export default state
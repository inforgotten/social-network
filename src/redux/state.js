const state = {
  profilePage: {
    posts: [
      { id: 1, message: 'Hello, it\'s my first post', likesCount: 22 },
      { id: 2, message: 'How are you?', likesCount: 14 }
    ]
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

export default state
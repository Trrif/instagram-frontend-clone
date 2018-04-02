const posts = [{
  postedBy: 'trriforce',
  desctiption: 'Тестовое описание',
  bodyUrl: 'https://placeimg.com/600/400/people',
  likes: ['trriforce', 'pavel.pavlov'],
  location: 'Sevastopol',
  date: '02:03:27',
  marks: [{x: 240, y: 213, username: 'trriforce'}, {x: 123, y: 333, username: 'pavel.pavlov'}, {x: 111, y: 111, username: 'chrome_boy_21'}],
  comments: {
    commentId0: {
      id: 'commentId0',
      text: 'Тестовый коммент ',
      username: 'chrome_boy_21'
    },
    commentId1: {
      id: 'commentId1',
      text: 'Тестовый коммент 2',
      username: 'pavel.pavlov'
    },
    commentId2: {
      id: 'commentId2',
      text: 'Тестовый коммент 3',
      username: 'trriforce'
    }
  }
}, {
  postedBy: 'pavel.pavlov',
  desctiption: '',
  bodyUrl: 'https://placeimg.com/600/600/people',
  likes: ['pavel.pavlov'],
  location: 'Kuzneckiy',
  date: '02:03:27',
  marks: [],
  comments: {
    commentId0: {
      id: 'commentId0',
      text: 'Тестовый коммент ',
      username: 'chrome_boy_21'
    },
    commentId1: {
      id: 'commentId1',
      text: 'Тестовый коммент 2',
      username: 'pavel.pavlov'
    }
  }
}, {
  postedBy: 'chrome_boy_21',
  desctiption: '',
  bodyUrl: 'https://placeimg.com/1920/1080/people',
  likes: ['pavel.pavlov'],
  location: 'Blagoveshchensk',
  date: '02:03:27',
  marks: [{x: 240, y: 213, username: 'trriforce'}],
  comments: {}
}, {
  postedBy: 'chrome_boy_21',
  desctiption: '',
  bodyUrl: 'https://placeimg.com/400/400/people',
  likes: ['trriforce'],
  location: 'Blagoveshchensk',
  date: '02:03:27',
  marks: [{x: 240, y: 213, username: 'trriforce'}],
  comments: {}
}
]
export default posts

const posts = {
  postId1: {
    id: 'postId1',
    postedBy: 'trriforce',
    desctiption: 'Тестовое описание',
    bodyUrl: 'https://placeimg.com/600/400/people',
    likes: ['trriforce', 'pavel.pavlov'],
    location: 'Sevastopol',
    date: '02:03:27',
    marks: [{x: 240, y: 213, username: 'trriforce'}, {x: 123, y: 333, username: 'pavel.pavlov'}, {x: 111, y: 111, username: 'chrome_boy_21'}],
    comments: {
      commentId1: {
        id: 'commentId1',
        text: 'Тестовый коммент ',
        username: 'chrome_boy_21'
      },
      commentId2: {
        id: 'commentId2',
        text: 'Тестовый коммент 2',
        username: 'pavel.pavlov'
      },
      commentId3: {
        id: 'commentId3',
        text: 'Тестовый коммент 3',
        username: 'trriforce'
      },
      commentsIds: ['commentId1', 'commentId2', 'commentId3']
    }
  },
  postId2: {
    id: 'postId2',
    postedBy: 'pavel.pavlov',
    desctiption: '',
    bodyUrl: 'https://placeimg.com/600/600/people',
    likes: ['pavel.pavlov'],
    location: 'Kuzneckiy',
    date: '02:03:27',
    marks: [],
    comments: {
      commentId1: {
        id: 'commentId1',
        text: 'Тестовый коммент ',
        username: 'chrome_boy_21'
      },
      commentId2: {
        id: 'commentId2',
        text: 'Тестовый коммент 2',
        username: 'pavel.pavlov'
      },
      commentsIds: ['commentId1', 'commentId2']
    }
  },
  postId3: {
    id: 'postId3',
    postedBy: 'chrome_boy_21',
    desctiption: '',
    bodyUrl: 'https://placeimg.com/300/500/people',
    likes: ['pavel.pavlov'],
    location: 'Blagoveshchensk',
    date: '02:03:27',
    marks: [{x: 240, y: 213, username: 'trriforce'}],
    comments: {
      commentsIds: []
    }
  },
  postId4: {
    id: 'postId4',
    postedBy: 'chrome_boy_21',
    desctiption: '',
    bodyUrl: 'https://placeimg.com/800/400/people',
    likes: ['trriforce'],
    location: 'Blagoveshchensk',
    date: '02:03:27',
    marks: [{x: 240, y: 213, username: 'trriforce'}],
    comments: {
      commentsIds: []
    }
  },
  postsIds: ['postId1', 'postId2', 'postId3', 'postId4']
}
export default posts

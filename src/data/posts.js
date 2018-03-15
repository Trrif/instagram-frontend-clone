const posts = {
  postId1: {
    id: 'postId1',
    postedBy: 'trriforce',
    desctiption: 'Тестовое описание',
    bodyUrl: 'https://via.placeholder.com/600x400',
    isLiked: true,
    likesByUsernames: ['trriforce', 'pavel.pavlov'],
    location: 'Sevastopol',
    commentsIds: ['commentId1', 'commentId2'],
    date: '02:03:27',
    marks: [{x: 240, y: 213, username: 'trriforce'}]
  },
  postId2: {
    id: 'postId2',
    postedBy: 'pavel.pavlov',
    desctiption: '',
    bodyUrl: 'https://via.placeholder.com/600x400',
    isLiked: false,
    likesByUsernames: ['pavel.pavlov'],
    location: 'Kuzneckiy',
    commentsIds: ['commentId1'],
    date: '02:03:27',
    marks: [{x: 240, y: 213, username: 'trriforce'}]
  },
  postId3: {
    id: 'postId3',
    postedBy: 'chrome_boy_21',
    desctiption: '',
    bodyUrl: 'https://via.placeholder.com/600x400',
    isLiked: false,
    likesByUsernames: ['pavel.pavlov'],
    location: 'Blagoveshchensk',
    commentsIds: ['commentId2'],
    date: '02:03:27',
    marks: [{x: 240, y: 213, username: 'trriforce'}]
  },
  postId4: {
    id: 'postId4',
    postedBy: 'chrome_boy_21',
    desctiption: '',
    bodyUrl: 'https://via.placeholder.com/600x400',
    isLiked: true,
    likesByUsernames: ['trriforce'],
    location: 'Blagoveshchensk',
    commentsIds: [],
    date: '02:03:27',
    marks: [{x: 240, y: 213, username: 'trriforce'}]
  },
  postsIds: ['postId1', 'postId2', 'postId3', 'postId4']
}
export default posts

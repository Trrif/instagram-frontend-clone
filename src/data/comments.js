const comments = {
  commentId1: {
    id: 'commentId1',
    text: 'Тестовый коммент ',
    username: 'chrome_boy_21',
    liked: false,
    likesById: ['chrome_boy_21', 'pavel.pavlov'],
    reply: null
  },
  commentId2: {
    id: 'commentId2',
    text: 'Тестовый коммент 2',
    username: 'pavel.pavlov',
    liked: true,
    likesById: ['trriforce'],
    reply: 'commentId1'
  },
  commentId3: {
    id: 'commentId3',
    text: 'Тестовый коммент 3',
    username: 'trriforce',
    liked: false,
    likesById: ['chrome_boy_21'],
    reply: 'commentId1'
  }
}
export default comments

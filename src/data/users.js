const users = [{
  username: 'trriforce',
  password: 'test',
  name: 'Александр',
  subName: 'Трифонов',
  avatarUrl: 'https://via.placeholder.com/75x75',
  subscribers: ['pavel.pavlov'],
  subscriptions: ['pavel.pavlov', 'chrome_boy_21']
},
{
  username: 'pavel.pavlov',
  password: 'test',
  name: 'Павел',
  subName: 'Павлов',
  avatarUrl: 'https://via.placeholder.com/75x75',
  subscribers: ['trriforce'],
  subscriptions: ['trriforce', 'chrome_boy_21']
},
{
  username: 'chrome_boy_21',
  password: 'test',
  name: 'Антон',
  subName: 'Черноок',
  avatarUrl: 'https://via.placeholder.com/75x75',
  subscribers: ['pavel.pavlov', 'trriforce'],
  subscriptions: []
}]

export default users

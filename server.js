// server stuff
import express from 'express'
import path from 'path'
import http from 'http'
import socketIo from 'socket.io'
import jwt from 'jsonwebtoken'

// fake data
import posts from './src/data/posts'
import users from './src/data/users'

// mongoose
import mongoose from 'mongoose'
mongoose.connect('mongodb://trrif:123123@ds042677.mlab.com:42677/insta')

const UserModel = mongoose.model('user', {
  username: String,
  password: String,
  name: String,
  subName: String,
  avatarUrl: String,
  subscribers: Array,
  subscriptions: Array
})
const PostModel = mongoose.model('post', {
  id: String,
  postedBy: String,
  desctiption: String,
  bodyUrl: String,
  likes: { type: Array, default: [] },
  location: String,
  date: String,
  marks: { type: Array, default: [] },
  comments: { type: Object, default: {} }
})
UserModel.collection.drop()
PostModel.collection.drop()
UserModel.insertMany(users, () => {
  console.log('defaul users insert')
})
PostModel.insertMany(posts, () => {
  console.log('defaul posts insert')
})
const PORT = 3000
const PUBLIC_PATH = path.join(__dirname, '/public')
const SECRET = 'SECRET_KEY'
const app = express()
const appHttp = http.Server(app)
const io = socketIo(appHttp)
const isDevelopment = process.env.NODE_ENV === 'development'

let clients = {}
io.on('connection', function (socket) {
  let nameOfConnection
  socket.on('specifyUser', function (user) {
    nameOfConnection = user.username
    clients[user.username] = {usersubs: user.subscribers, id: socket.id}
  })
  socket.on('disconnect', function () {
    if (nameOfConnection) clients[nameOfConnection] = null
  })
  socket.on('newPost', function (post) {
    PostModel.collection.insert(post)
      .then(result => {
        let formatedPost = {}
        formatedPost[result.ops[0]._id] = result.ops[0]
        clients[post.postedBy].usersubs.map(sub => {
          if (clients[sub]) {
            io.sockets.connected[clients[sub].id].emit('newPost', formatedPost)
          }
        })
      })
  })
  socket.on('toggleLike', function (payload) {
    console.log(payload)
    console.log(`${payload.isFind ? '$pull' : '$push'}`)
    PostModel.findByIdAndUpdate(payload.path[0], {[`${payload.isFind ? '$pull' : '$push'}`]: {likes: payload.username}})
      .then(post => {
        console.log(post.likes)
        UserModel.findOne({'username': post.postedBy})
          .then(user => {
            console.log(user)
            if (user.subscribers) {
              [...user.subscribers, user.username].map(sub => {
                if (clients[sub]) {
                  if (sub !== payload.username) {
                    io.sockets.connected[clients[sub].id].emit('toggleLike', payload)
                  }
                }
              })
            }
          })
      })
  })
  socket.on('newComment', function (payload) {
    PostModel.findById(payload.postId)
      .then(post => {
        const commentId = 'commentId' + Object.keys(post.comments).length
        const comment = {
          id: commentId,
          text: payload.text,
          username: payload.username
        }
        let updatedComments = post.comments
        updatedComments[commentId] = comment
        post.update({comments: updatedComments})
          .then(updatedPost => {
            UserModel.findOne({'username': post.postedBy})
              .then(user => {
                if (user.subscribers) {
                  [...user.subscribers, user.username].map(sub => {
                    if (clients[sub]) {
                      if (sub !== payload.username) {
                        io.sockets.connected[clients[sub].id].emit('newComment', payload)
                      }
                    }
                  })
                }
              })
          })
      })
  })
})
appHttp.listen(PORT, function () {
  console.log('listening on ' + PORT)
})

if (isDevelopment) {
  const webpack = require('webpack')
  const webpackConfig = require('./webpack.config.babel').default
  const compiler = webpack(webpackConfig)
  app.use(require('webpack-dev-middleware')(compiler, {
    hot: true,
    stats: {
      colors: true
    }
  }))
  app.use(require('webpack-hot-middleware')(compiler))
}
app.use(require('body-parser').urlencoded({ extended: false }))
app.use(require('body-parser').json())
app.use(express.static(PUBLIC_PATH))

app.post('/login', function (req, res) {
  UserModel.findOne({'username': req.body.username}).then(user => {
    if (!user) res.json({message: 'Такого пользователя не существует', status: 'UNSUCCESS'})
    if (req.body.password === user.password) {
      const token = jwt.sign({username: req.body.username}, SECRET)
      res.send({token: token, status: 'SUCCESS'})
    } else {
      res.send({message: 'Неверный пароль', status: 'UNSUCCESS'})
    }
  })
})
app.post('/initialState', function (req, res) {
  jwt.verify(req.body.token, SECRET, function (err, decrypted) {
    if (decrypted) {
      UserModel.findOne({'username': decrypted.username})
        .then(user => {
          PostModel.find({'postedBy': [ ...user.subscriptions, user.username ]})
            .sort({'_id': -1})
            .then(serverPosts => {
              let posts = {}
              serverPosts.map((post) => {
                posts[post._id] = post
              })
              const initialState = {
                user,
                posts
              }
              res.send(initialState)
            })
        })
    } else if (err) {
      let user = {}
      let posts = {}
      let token = ''
      const initialState = {
        user,
        posts,
        token
      }
      res.send(initialState)
    }
  })
})
app.get('*', function (req, res) {
  res.sendFile(path.resolve(PUBLIC_PATH, 'index.html'))
})

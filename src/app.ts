import axios from 'axios'
import { PATH } from './path'
import { User } from './model/User'

const def = { name: 'Default', age: 0 }
const hank = { id: 1, name: 'Hank', age: 37 }

const user = new User(hank)

// const user = new User(def)
user.on('save', () => {
  console.log(user)
})
user.save()

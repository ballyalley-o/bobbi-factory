import axios from 'axios'
import { PATH } from './path'
import { User } from './model/User'

const def = { name: 'Default', age: 0 }
const hank = { id: 1, name: 'Hank', age: 37 }

const user = User.buildUser({ id: 2 })

user.on('change', () => {
  console.log(user)
})

user.fetch()

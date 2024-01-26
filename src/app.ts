import axios from 'axios'
import { PATH } from './path'
import { User } from './model/User'

const user = new User({ id: 1 })

user.set({ name: 'bobbi' })
user.set({ age: 8 })

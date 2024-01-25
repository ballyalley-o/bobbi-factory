import axios from 'axios'
import { PATH } from './path'

const user = { name: 'John', age: 30 }

axios.post(PATH.API.USER, user)

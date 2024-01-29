import axios from 'axios'
import { PATH } from './path'
import { User } from './model/User'
import { Collection } from './model/Collection'
import IUser from './interface/IUser'
import { UserForm, UserEdit } from './view'

const def = { name: 'Default', age: 10 }
// const hank = { id: 1, name: 'Hank', age: 37 }

// const collection = User.buildUserCollection()
// collection.on('change', () => {
//   console.log(collection)
// })
// collection.fetch()

const user = User.buildUser(def)
const rootEl = document.getElementById('root')!

const userEdit = new UserEdit(rootEl, user)
userEdit.render()
console.log(userEdit)

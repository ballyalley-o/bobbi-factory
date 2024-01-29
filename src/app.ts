import axios from 'axios'
import { PATH } from './path'
import { User } from './model/User'
import { Collection } from './model/Collection'
import IUser from './interface/IUser'
import { UserForm } from './views'

// const def = { name: 'Default', age: 0 }
// const hank = { id: 1, name: 'Hank', age: 37 }

// const collection = User.buildUserCollection()
// collection.on('change', () => {
//   console.log(collection)
// })
// collection.fetch()

const userForm = new UserForm(document.getElementById('root')!)
userForm.render()

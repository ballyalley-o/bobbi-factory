import { User } from './model'

const user = new User({ name: 'myname', age: 20 })

user.on('change', () => {})
user.on('click', () => {})

console.log(user)

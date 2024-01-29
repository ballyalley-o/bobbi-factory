import { User } from '../model/User'
import View from './View'
import IUser from '../interface/IUser'

class UserView extends View<User, IUser> {
  template(): string {
    return `
        <div>
            <h1>User Detail</h1>
            <div>Name: ${this.model.get('name')}</div>
            <div>Age: ${this.model.get('age')}</div>
        </div>
    `
  }
}

export default UserView

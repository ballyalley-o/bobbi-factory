import { Model } from './Model'
import { RESPONSE } from '../constant'
import IUser from '../interface/IUser'
import { ApiSync, Event, Attribute, Collection } from '../model'

export class User extends Model<IUser> {
  static buildUser(attr: IUser): User {
    return new User(
      new Attribute<IUser>(attr),
      new Event(),
      new ApiSync<IUser>()
    )
  }

  static buildUserCollection(): Collection<User, IUser> {
    return new Collection<User, IUser>((json: IUser) => User.buildUser(json))
  }

  setRandomAge(): void {
    const age = Math.round(Math.random() * 100)
    this.set({ age })
  }

  isAdmin(): boolean {
    if (this.get('id') === 1) {
      console.log('User is admin')
      return true
    } else {
      console.log('User is not admin')
      return false
    }
  }
}

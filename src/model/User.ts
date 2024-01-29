import { Model } from './Model'
import { RESPONSE } from '../constant'
import IUser from '../interface/IUser'
import { ApiSync } from './ApiSync'
import { Event } from './Event'
import { Attribute } from './Attribute'

export class User extends Model<IUser> {
  static buildUser(attr: IUser): User {
    return new User(
      new Attribute<IUser>(attr),
      new Event(),
      new ApiSync<IUser>()
    )
  }
}

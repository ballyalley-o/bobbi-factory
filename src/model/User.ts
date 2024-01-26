import IUser from '../interface/IUser'
import { Event } from './Event'

export class User {
  public event: Event = new Event()

  constructor(private data: IUser) {}

  get(propName: string): number | string {
    return this.data[propName]
  }

  set(update: IUser): void {
    Object.assign(this.data, update)
  }
}

import IUser from '../interface/IUser'
import { CallBack } from '../types'

export class User {
  events: { [key: string]: CallBack[] } = {}

  constructor(private data: IUser) {}

  get(propName: string): number | string {
    return this.data[propName]
  }

  set(update: IUser): void {
    Object.assign(this.data, update)
  }

  on(eventName: string, callback: CallBack): void {
    const handler = this.events[eventName] || []
    handler.push(callback)
    this.events[eventName] = handler
  }

  trigger(eventName: string): void {
    const handler = this.events[eventName]

    if (!handler || handler.length === 0) {
      return
    }

    handler.forEach((cb) => {
      cb()
    })
  }
}

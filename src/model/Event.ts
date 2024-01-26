import { CallBack } from '../types'

export class Event {
  events: { [key: string]: CallBack[] } = {}

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

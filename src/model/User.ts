import IUser from '../interface/IUser'

type CallBack = () => {}

export class User {
  constructor(private data: IUser) {}

  get(propName: string): number | string {
    return this.data[propName]
  }

  set(update: IUser): void {
    Object.assign(this.data, update)
  }

  on(eventName: string, callback: CallBack): void {}
}

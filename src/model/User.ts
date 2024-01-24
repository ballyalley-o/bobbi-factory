interface IUser {
  name: string
  age: number
}

export class User {
  constructor(private data: IUser) {}

  get(propName: string): number | string {
    return this.data[propName]
  }

  set(update: IUser): void {
    Object.assign(this.data, update)
  }
}

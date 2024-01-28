import { AxiosResponse } from 'axios'
import IUser from '../interface/IUser'
import { Event } from './Event'
import { Attribute } from './Attribute'
import { Sync } from './Sync'
import { RESPONSE } from '../constant'

export class User {
  public event: Event = new Event()
  public sync: Sync<IUser> = new Sync<IUser>()
  public attribute: Attribute<IUser>

  constructor(attr: IUser) {
    this.attribute = new Attribute<IUser>(attr)
  }

  get on() {
    return this.event.on
  }

  get trigger() {
    return this.event.trigger
  }

  get get() {
    return this.attribute.get
  }

  set(update: IUser): void {
    this.attribute.set(update)
    this.event.trigger('change')
  }

  fetch(): void {
    const id = this.get('id')

    if (typeof id !== 'number') {
      throw new Error(RESPONSE.ERROR.FETCH['message'])
    }

    this.sync.fetch(id).then((res: AxiosResponse): void => {
      this.set(res.data)
    })
  }

  save(): void {
    this.sync
      .save(this.attribute.getAll())
      .then((res: AxiosResponse): void => {
        this.trigger('save')
      })
      .catch((err: Error): void => {
        this.trigger('error')
      })
  }
}

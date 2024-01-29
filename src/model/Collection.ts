import axios, { AxiosResponse } from 'axios'
import { User, Event, Attribute } from '../model'
import { PATH } from '../path'
import IUser from '../interface/IUser'

export class Collection<T, K> {
  model: T[] = []
  event: Event = new Event()

  constructor(public deserialize: (json: K) => T) {}

  get on() {
    return this.event.on
  }

  get trigger() {
    return this.event.trigger
  }

  fetch(): void {
    axios.get(PATH.API.USER).then((res: AxiosResponse) => {
      res.data.forEach((data: K) => {
        this.model.push(this.deserialize(data))
      })

      this.trigger('change')
    })
  }
}

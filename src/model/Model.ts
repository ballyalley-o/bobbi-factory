import { AxiosResponse, AxiosPromise } from 'axios'
import IAttribute from '../interface/IAttribute'
import IEvent from '../interface/IEvent'
import IApiSync from '../interface/IApiSync'
import IHasId from '../interface/IHasId'
import { RESPONSE } from '../constant'

export class Model<T extends IHasId> {
  constructor(
    private attribute: IAttribute<T>,
    private event: IEvent,
    private sync: IApiSync<T>
  ) {}

  get on() {
    return this.event.on
  }

  get trigger() {
    return this.event.trigger
  }

  get get() {
    return this.attribute.get
  }

  set(update: T): void {
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

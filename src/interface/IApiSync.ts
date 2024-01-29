import { AxiosPromise } from 'axios'

interface IApiSync<T> {
  fetch(id: number): AxiosPromise
  save(data: T): AxiosPromise
}

export default IApiSync

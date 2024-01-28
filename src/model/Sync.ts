import axios, { AxiosPromise } from 'axios'
import { PATH } from '../path'

interface IHasId {
  id?: number
}

export class Sync<T extends IHasId> {
  fetch(id: number): AxiosPromise {
    return axios.get(PATH.API.USER_ID(id.toString()))
  }

  save(data: T): AxiosPromise {
    const { id } = data

    if (id) {
      return axios.put(PATH.API.USER_ID(id.toString()), data)
    } else {
      return axios.post(PATH.API.USER, data)
    }
  }
}

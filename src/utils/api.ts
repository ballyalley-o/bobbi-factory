import { GLOBAL } from '../config'

const SERVER = GLOBAL.SERVER

export const apiConnect = (...path: string[]) => {
  return [SERVER, ...path].join('/')
}

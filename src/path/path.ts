import { apiConnect } from '../utils'

const PATH = {
  API: {
    USER: apiConnect('users'),
    USER_ID: (id: string) => apiConnect('users', id),
  },
}

export default PATH

import { User, Collection } from './model'
import IUser from './interface/IUser'
import { UserList } from './view'

const def = { name: 'Default', age: 10 }

const users = new Collection((json: IUser) => User.buildUser(json))
users.on('change', () => {
    const root = document.getElementById('root');

    if (root) {
      new UserList(root, users).render()
    }
  });

  users.fetch();


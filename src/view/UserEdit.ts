import { User } from '../model'
import { View, UserView, UserForm } from '../view'
import IUser from '../interface/IUser'

class UserEdit extends View<User, IUser> {
  regionMap(): { [key: string]: string } {
    return {
      userShow: '.user-show',
      userForm: '.user-form',
    }
  }

  onRender(): void {
    new UserView(this.region.userShow, this.model).render()
    new UserForm(this.region.userForm, this.model).render()
  }

  template(): string {
    return `
            <div>
                <div class="user-show"></div>
                <div class="user-form"></div>
            </div>
        `
  }
}

export default UserEdit

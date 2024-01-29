import { User } from '../model/User'
import View from './View'
import IUser from '../interface/IUser'

class UserForm extends View<User, IUser> {
  eventMap(): { [key: string]: () => void } {
    return {
      'click:.set-age': this.onSetAgeClick,
      'click:.set-name': this.onSetNameClick,
      'click:.set-save': this.onSaveClick,
    }
  }

  onSaveClick = (): void => {
    this.model.save()
  }

  onSetNameClick = (): void => {
    const input = this.parent.querySelector('input') as HTMLInputElement | null

    if (input) {
      const name = input.value

      this.model.set({ name })
    }
  }

  onSetAgeClick = (): void => {
    this.model.setRandomAge()
  }

  template(): string {
    return `
      <div>
        <input placeholder="${this.model.get('name')}" />
        <button class="set-name">Change Name</button>
        <button class="set-age">Set Random Age</button>
        <button class="set-save">Save User</button>
      </div>
    `
  }
}

export default UserForm

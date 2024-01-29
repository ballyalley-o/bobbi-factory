class UserForm {
  constructor(public parent: Element | null) {}

  eventMap(): { [key: string]: () => void } {
    return {
      'click:button': this.onButtonClick,
    }
  }

  onButtonClick(): void {
    console.log('binding')
  }

  template(): string {
    return `
      <div>
        <h1>User Form</h1>
        <input />
        <button>Click Me</button>
      </div>
    `
  }

  bindEvent(fragment: DocumentFragment): void {
    const eventMap = this.eventMap()

    for (let eventKey in eventMap) {
      const [eventName, selector] = eventKey.split(':')

      fragment.querySelectorAll(selector).forEach((el) => {
        el.addEventListener(eventName, eventMap[eventKey])
      })
    }
  }

  render(): void {
    const templateElement = document.createElement(
      'template'
    ) as HTMLTemplateElement
    templateElement.innerHTML = this.template()

    this.bindEvent(templateElement.content)

    if (!this.parent) {
      return
    }

    this.parent.append(templateElement.content)
  }
}

export default UserForm

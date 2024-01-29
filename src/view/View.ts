import { User, Model } from '../model'
import IHasId from '../interface/IHasId'

interface IViewModel {
  on(eventName: string, callback: () => void): void
}

abstract class View<T extends Model<K>, K extends IHasId> {
  region: { [key: string]: Element } = {}

  constructor(public parent: Element, public model: T) {
    this.bindModel()
  }

  abstract template(): string

  regionMap(): { [key: string]: string } {
    return {}
  }

  eventMap(): { [key: string]: () => void } {
    return {}
  }

  bindModel(): void {
    this.model.on('change', () => {
      this.render()
    })
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

  mapRegion(fragment: DocumentFragment): void {
    const regionMap = this.regionMap()

    for (let key in regionMap) {
      const selector = regionMap[key]
      const element = fragment.querySelector(selector)

      if (element) {
        this.region[key] = element
      }
    }
  }

  onRender(): void {}

  render(): void {
    this.parent.innerHTML = ''

    const templateEl = document.createElement('template') as HTMLTemplateElement
    templateEl.innerHTML = this.template()

    this.bindEvent(templateEl.content)
    this.mapRegion(templateEl.content)
    this.onRender()

    // if (!this.parent) {
    //   return
    // }

    this.parent.append(templateEl.content)
  }
}

export default View

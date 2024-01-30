import { Collection } from '../model/Collection';


abstract class CollectionView <T, K> {
    constructor(public parent: Element, public collection: Collection <T, K>) {}

    abstract renderItem(model: T,  itemParent: Element ) : void

    render(): void {
        this.parent.innerHTML = ''

        const templateEl = document.createElement('template')

        for (let model of this.collection.model) {
            const wrapperEl = document.createElement('div')
            this.renderItem(model, wrapperEl)

            templateEl.content.append(wrapperEl)
        }

        this.parent.append(templateEl.content)
    }
}


export default CollectionView
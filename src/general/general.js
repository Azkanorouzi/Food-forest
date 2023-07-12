import deepFreeze from 'deep-freeze'
// Adding deep freeze as an Object property
Object.deepFreeze = deepFreeze
class Page {
  constructor() {
    this.assets = {}
  }
  _getContainer() {
    return document.querySelector('.container')
  }
  _clearContainer() {
    const CONTAINER = this._getContainer()
    CONTAINER.innerHTML = ''
  }
  _fillContainer(html) {
    this._getContainer().innerHTML = html
  }
  show() {
    const htmlTemplate = this._generateHtml()
    this._fillContainer(htmlTemplate)
  }
  emptyContainer() {
    this._clearContainer()
  }
  fireAnimation() {}
}

export { Page }

class Page {
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
  hide() {
    this._clearContainer()
  }
  fireAnimation() {}
}

export { Page }

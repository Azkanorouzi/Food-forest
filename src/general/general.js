import deepFreeze from 'deep-freeze'
Object.deepFreeze = deepFreeze
export class Page {
  container = document.querySelector('.container')
  render() {
    this.container.innerHTML = this._generateHtml()
  }
}

import { Page } from '../general/general'
import url1 from './assets/pattern.png'
import url2 from './assets/chef.png'
class HomePage extends Page {
  constructor() {
    this._name = 'home-page'
  }
  _generateHtml(patternUrl, chefUrl) {
    return `
    <nav>
    </nav>
    <main>
        <img src="${patternUrl}" alt="" class="${this._name}__pattern">
        <img src="${chefUrl}" alt="" class="${this._name}__chef-img">
    </main>
    `
  }
  show() {}
}

export { HomePage }

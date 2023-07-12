import { Page } from '../general/general'
//  Assets
import patternUrl from './assets/pattern.png'
import chefUrl from './assets/chef.png'
class HomePage extends Page {
  constructor() {
    super()
    this.name = 'home-page'
  }
  _generateHtml() {
    return `
    <main class="${this.name} page">
        <img src="${patternUrl}" alt="" class="${this.name}__pattern parallax" data-speed="2">
        <img src="${chefUrl}" alt="" class="${this.name}__chef-img parallax" data-speed="8">
    </main>
    `
  }
  applyParallax(className) {
    const parallax = document.addEventListener('mousemove', function (e) {
      this.querySelectorAll('.parallax').forEach((layer) => {
        const speed = layer.getAttribute('data-speed')
        const x = (window.innerWidth - e.pageX * speed) / 100
        const y = (window.innerHeight - e.pageY * speed) / 100
        layer.style.transform = `translateX(${x}px) translateY(${y}px)`
      })
    })
  }
}
const homePage = Object.deepFreeze(new HomePage())
export default homePage

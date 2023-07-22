import { Page } from '../general/general'
//  Assets
import patternUrl from './assets/pattern.png'
import chefUrl from './assets/chef.png'
import bg from './assets/bg.jpg'
import fullBurgerUrl from './assets/fullBurger.png'
import upBurgerUrl from './assets/upburgerbun.png'
import bottomBurgerUrl from './assets/bottomBurgerbun.png'

class HomePage extends Page {
  _pageName = 'home-page'
  _generateHtml() {
    return `
    <img src="${bg}" class="home-page__background parallax" data-speed="2">
    <main class="${this._pageName} page">
        <h1 class='logo parallax' data-speed = "2">Food Forest</h1>
        <img src="${patternUrl}" alt="" class="${this._pageName}__pattern" data-speed="0">
        <img src="${chefUrl}" alt="" class="${this._pageName}__chef-img parallax" data-speed="10">
        <section class="nav">

          <div class="burger-menu-container">
          <img src="${fullBurgerUrl}" alt="" class=" parallax burger-menu--full burger" data-speed="4">
          <img src="${upBurgerUrl}" alt="" class=" parallax burger-menu--up burger" data-speed="3">
          <img src="${bottomBurgerUrl}" alt="" class=" parallax burger-menu--bottom burger" data-speed="3">

          <ul class="nav__list">
          <li class="nav__link--recipes nav__link"
          data-link="recipes">
            Recipes
          </li>
          <li class="nav__link nav__link--home"data-link="home"><i class="bi bi-house"></i>Home</li>
          <li class="nav__link nav__link--about" data-link="about"><i class="bi bi-info"></i>About</li>
        </ul>
        </div>
        </section>
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
  _getBurger() {
    return document.querySelector('.burger-menu--full')
  }
}
const homePage = Object.deepFreeze(new HomePage())
homePage.applyParallax()
export default homePage

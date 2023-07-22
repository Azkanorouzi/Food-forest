import { Page } from '../general/general'
//  Assets
import patternUrl from './assets/pattern.png'
import chefUrl from './assets/chef.png'
import fullBurgerUrl from './assets/fullBurger.png'
import upBurgerUrl from './assets/upburgerbun.png'
import bottomBurgerUrl from './assets/bottomBurgerbun.png'
import 'bootstrap-icons/bootstrap-icons.svg'
class HomePage extends Page {
  _pageName = 'home-page'
  _generateHtml() {
    return `
    <div class="home-page__background parallax" data-speed="1"></div>
    <main class="${this.name} page">
        <h1 class='logo parallax' data-speed = "5">Food Forest</h1>
        <img src="${patternUrl}" alt="" class="${this.name}__pattern parallax" data-speed="3">
        <img src="${chefUrl}" alt="" class="${this.name}__chef-img parallax" data-speed="10">
        <section class="nav">
          <ul class="nav__list">
            <li class="nav__link--menu nav__link"
            data-link="menu"><svg class="bi" width="16" height="16">
            <use xlink:href="#heart" />
          </svg>Menu</li>
            <li class="nav__link nav__link--home"data-link="home"><i class="bi bi-house"></i>Home</li>
            <li class="nav__link nav__link--about" data-link="about"><i class="bi bi-info"></i>About</li>
          </ul>
          <img src="${fullBurgerUrl}" alt="" class=" parallax burger-menu--full burger" data-speed="3">
          <img src="${upBurgerUrl}" alt="" class=" parallax burger-menu--up burger" data-speed="3">
          <img src="${bottomBurgerUrl}" alt="" class=" parallax burger-menu--bottom burger" data-speed="3">
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
export default homePage
import { Page } from '../general/general'
//  Assets
import patternUrl from './assets/pattern.png'
import chefUrl from './assets/chef.png'
import fullBurgerUrl from './assets/fullBurger.png'
import upBurgerUrl from './assets/upburgerbun.png'
import bottomBurgerUrl from './assets/bottomBurgerbun.png'
class HomePage extends Page {
  _pageName = 'home-page'
  _generateHtml() {
    return `
    <div class="home-page__background parallax" data-speed="1"></div>
    <main class="${this._pageName} page">
        <h1 class='logo parallax' data-speed = "5">Food Forest</h1>
        <img src="${patternUrl}" alt="" class="${this._pageName}__pattern parallax" data-speed="3">
        <img src="${chefUrl}" alt="" class="${this.pageName}__chef-img parallax" data-speed="10">
        <section class="nav">
          <ul class="nav__list">
            <li class="nav__link--menu nav__link"
            data-link="menu">Menu</li>
            <li class="nav__link nav__link--home"data-link="home">Home</li>
            <li class="nav__link nav__link--about" data-link="about">
            About</li>
          </ul>
          <img src="${fullBurgerUrl}" alt="" class=" parallax burger-menu--full burger" data-speed="3">
          <img src="${upBurgerUrl}" alt="" class=" parallax burger-menu--up burger" data-speed="3">
          <img src="${bottomBurgerUrl}" alt="" class=" parallax burger-menu--bottom burger" data-speed="3">
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
export default homePage

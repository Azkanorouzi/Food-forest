import { Page } from '../general/general'
// Assets
import fullBurgerUrl from './assets/fullBurger.png'
import upBurgerUrl from './assets/upburgerbun.png'
import bottomBurgerUrl from './assets/bottomBurgerbun.png'

class Recipes extends Page {
  _pageName = 'recipes'
  _generateHtml() {
    return `
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
    `
  }
}
const recipes = Object.deepFreeze(new Recipes())
export default recipes

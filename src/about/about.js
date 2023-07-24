import { Page } from '../general/general'
// Assets
import fullBurgerUrl from './assets/fullBurger.png'
import upBurgerUrl from './assets/upburgerbun.png'
import bottomBurgerUrl from './assets/bottomBurgerbun.png'
import github from './assets/github.png'
import meImg from './assets/me.jpg'
class About extends Page {
  _pageName = 'about'
  _generateHtml() {
    return `
    <main class="${this._pageName} page">
        <h1 class='logo logo--about' data-speed = "2">Food Forest</h1>
        <figure class="info-card">
        <h1 class='about__title'>
        <img src="${meImg}" alt="me-img" class="me-img"/>
        Hey this is me <a href="https://github.com/Azkanorouzi" class="title-link"> Azka </a> :)
        </h1>
          <figcaption class="info-card-text">
            <h2 class='about__subtitle'>
              I am the developer of this pure vanilla js, mvc  recipes search application.
            </h2>
            <p class="about__desc">
            with food forest you can find any recipes you're looking for, perhaps something even more delicious than your grandma's cooking, even if you want to eat something new this time, or  maybe you're looking for a healthy meal, for whatever use case you have, you came to the right place, in food forest you can find more than 1,000,000 food recipes, you can bookmark your favorite ones, and you're able to see the required ingredients and instructions, plus nutrition values which makes food forest stand out from the rest.
            enjoy, and please don't forget to checkout my other projects, my name is Azka and this was food forest :)
            </p>
          </figcaption>
        </figure>
    </main>
    <section class="nav nav--about">

    <div class="burger-menu-container ">
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
  <a href="https://github.com/Azkanorouzi">
    <img src="${github}" alt="github" class="github-icon" />
  </a>
    `
  }
}

const about = Object.deepFreeze(new About())
export default about

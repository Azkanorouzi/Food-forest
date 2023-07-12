import '../node_modules/css-reset-and-normalize'
import '../node_modules/core.js'
import './main.scss'
import controlPages from './general/controlPages'
import './header/header'
import homePage from './home/home'
import './menu/menu'
import './about/about'
// Enabling HMR
if (module.hot) {
  module.hot.accept()
}
console.log(homePage)
// Loading home page when user comes to our website
controlPages.showPage(homePage)

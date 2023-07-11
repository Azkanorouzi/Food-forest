import '../node_modules/css-reset-and-normalize'
import '../node_modules/core.js'
import './main.scss'
import './header/header'
import './home/home'
import './menu/menu'
import './about/about'
// Enabling HMR
if (module.hot) {
  module.hot.accept()
}

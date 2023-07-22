import home from '../home/home'
import '../application/application'
import '../about/about'

export const controlPages = {
  init() {
    home.render()
  },
  start() {
    this.listenToLinks(querySelector('.nav__list'))
  },
  listenToLinks() {},
}

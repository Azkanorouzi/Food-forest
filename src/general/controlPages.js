import home from '../home/home'
import about from '../about/about'
import recipes from '../recipes/recipes'
import '../recipes/recipes'

export const controlPages = {
  curPage: '',
  pages: { home, about, recipes },
  init() {
    home.render()
    this.curPage = 'home'
  },
  start() {
    this.listenToLinks(document.querySelector('.nav__list'))
  },
  listenToLinks(links) {
    links.addEventListener('click', (e) => {
      const clickedLink = e.target.closest('.nav__link')
      if (
        !e.target.closest('.nav__link') ||
        this.curPage === clickedLink.dataset.link
      )
        return
      this.pages[clickedLink.dataset.link].render()
      this.curPage = clickedLink.dataset.link
      this.start()
    })
  },
}

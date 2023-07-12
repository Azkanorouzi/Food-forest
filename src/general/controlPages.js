const controlPages = {
  hidePages: (page) => page.emptyContainer(),
  showPage: (page) => {
    page.show()
    if (page.name === 'home-page') {
      page.applyParallax('.parallax')
    }
  },
}
export default controlPages

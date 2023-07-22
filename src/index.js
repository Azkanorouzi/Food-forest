import '../node_modules/css-reset-and-normalize'
import '../node_modules/core.js'
import './main.scss'
import { controlPages } from './general/controlPages'
controlPages.init()
controlPages.start()
// Enabling HMR
if (module.hot) {
  module.hot.accept()
}

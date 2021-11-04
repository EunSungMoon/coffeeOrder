import { sel } from "./common.js";

// header
export default {
  init() {
    this.load();
    this.event();
  },

  load() {
    this.createHeader();
    this.createNav();
  },

  event() {

  },

  createHeader() {
    let titleDom = `
    <div class = "headWrap">
      <div class = "logo"></div>
      <h1>Order</h1>
    </div>
      `
    sel.el('.header').insertAdjacentHTML('afterbegin', titleDom)
  },

  createNav() {
    let navDom = `
      <nav>
        <ul>
          <li><a href = "#">COFFEE</a></li>
          <li class = "margin25"><a href="#">nonCOFFEE</a></li>
          <li><a href = "#">TEA</a></li>
          <li><a href = "#">ADE</a></li>
        </ul>
      <nav>
    `
    sel.el('.headWrap').insertAdjacentHTML('afterend', navDom)
  }

}
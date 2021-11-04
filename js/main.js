import { sel } from "./common.js";
import menu from "./menu.js";


export default {
  init() {
    this.load();
    this.event();
  },

  load() {
    this.templateWrap()
    this.menuTemplate('.coffeeWrap', menu.coffeeArray);
    this.menuTemplate('.nocoffeeWrap', menu.nocoffeeArray);
    this.display('.nocoffeeWrap','none');
  },

  event() {

  },

  templateWrap() {
    let wrap = `
      <div class = "coffeeWrap"></div>
      <div class = "nocoffeeWrap"></div>
      <div class = "teaWrap"></div>
      <div class = "adeWrap"></div>
    `
    sel.el('main').insertAdjacentHTML('afterbegin', wrap)
  },

  menuTemplate(wrapper, tabName) {
    for (const key in tabName) {
      let template = `
      <div class = "menuWrap">
        <img class = "menuImg"></img>
        <div class = "menuInfo">
          <h2 class = "h2">${tabName[key].title}</h2>
          <p>${tabName[key].engTitle}</p>
          <p>${tabName[key].price}</p>
        </div>
      </div>
    `
      sel.el(wrapper).insertAdjacentHTML('afterbegin', template)
    }
  },

  display(elClassName, state) {
    sel.el(elClassName).style.display = state
  }
}
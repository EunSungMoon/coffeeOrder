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
    this.display('.nocoffeeWrap', 'none');
  },

  event() {

  },

  templateWrap() {
    menu.menuArray.forEach(function (arr) {
      let wrap = `
      <div class = "${arr.tab}Wrap"></div>
      `
      sel.el('main').insertAdjacentHTML('beforeend', wrap)
    })
  },

  menuTemplate(wrapper, menuInfo) {
    for (const key in menuInfo) {
      let template = `
      <div class = "menuWrap">
        <img class = "menuImg"></img>
        <div class = "menuInfo">
          <h2 class = "h2">${menuInfo[key].title}</h2>
          <p>${menuInfo[key].engTitle}</p>
          <p>${menuInfo[key].price}</p>
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
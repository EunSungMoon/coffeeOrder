import { sel } from "./common.js";
import coffee from "./coffee.js";

export default {
  init() {
    this.load();
    this.event();
  },

  load() {
    this.menuTemplate(coffee.coffeeArray)
  },

  event() {

  },

  menuTemplate(tabName) {
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
      sel.el('.main').insertAdjacentHTML('afterbegin', template)
    }
  },
  //h2 : 메뉴 이름. p1st 영문이름 p2nd 가격
}
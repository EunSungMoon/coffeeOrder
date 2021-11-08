import { sel } from "./common.js";
import menu from "./menu.js";

export default {
  init() {
    this.load();
    this.event();
  },

  load() {
    this.wrapTemplate();
    this.menuTemplate('.coffeeWrap', menu.coffeeArray);
    this.menuTemplate('.nocoffeeWrap', menu.nocoffeeArray);
    // this.menuTemplate('.teaWrap', menu.teaArray);
    // this.menuTemplate('.adeWrap', menu.adeArray);
  },

  event() {

  },

  wrapTemplate() {
    menu.tabArray.forEach(function (arr) {
      let wrap = `
      <div class = "${arr.tab}Wrap ${arr.state}">
        <ul></ul>
      </div>
      `
      sel.el('main').insertAdjacentHTML('beforeend', wrap)
    })
    
  },

  menuTemplate(wrapper, menuInfo) {
    console.log();
    for (const key in menuInfo) {
      let template = `
      <li data-code = "${menuInfo[key].code}">
        <img class = "menuImg"></img>
        <div class = "menuInfo">
          <h2 class = "h2">${menuInfo[key].title}</h2>
          <p>${menuInfo[key].engTitle}</p>
          <p>${menuInfo[key].price}</p>
        </div>
      </li>
    ` 
      sel.el(`${wrapper}>ul`).insertAdjacentHTML('beforeend', template)
    }
  },

  // display(elClassName, state) {
  //   sel.el(elClassName).style.display = state
  // }
}

//메뉴를 하나의 배열에 담고, 다 출력, data속성을 넣어준 다음에, 속성값이 아닌 애들은 none을 주는건?
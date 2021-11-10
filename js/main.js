import { sel } from "./common.js";
import Menu from "./menu.js";

export default {
  init() {
    this.load();
    this.event();
  },

  load() {
    this.wrapTemplate();
    this.menuTemplate('.coffeeWrap', Menu.coffeeArray);
    sel.el('.coffeeWrap').classList.remove('close'); //첫 화면 보여주기 위함
    this.menuTemplate('.nocoffeeWrap', Menu.nocoffeeArray);
    this.menuTemplate('.teaWrap', Menu.teaArray);
    this.menuTemplate('.cakeWrap', Menu.cakeArray);
  },

  event() {

  },

  wrapTemplate() {
    Menu.tabArray.forEach(function (arr) {
      let wrap = `
        <div class = "${arr.tab}Wrap wrap close">
          <ol></ol>
        </div>
      `
      sel.el('.main').insertAdjacentHTML('beforeend', wrap)
    })
    
  },

  menuTemplate(wrapper, menuInfo) {
    for (const key in menuInfo) {
      let template = `
      <li data-code = "${menuInfo[key].code}">
        <img class = "menuImg" src = "/css/img/${menuInfo[key].img}.jpg"></img>
        <div class = "menuInfo">
          <h2 class = "h2 ">${menuInfo[key].title}</h2>
          <p class = "engTitle">${menuInfo[key].engTitle}</p>
          <p class = "price">${menuInfo[key].price}원</p>
        </div>
      </li>
    ` 
      sel.el(`${wrapper}>ol`).insertAdjacentHTML('beforeend', template)
    }
  },

  // display(elClassName, state) {
  //   sel.el(elClassName).style.display = state
  // }
}

//메뉴를 하나의 배열에 담고, 다 출력, data속성을 넣어준 다음에, 속성값이 아닌 애들은 none을 주는건?
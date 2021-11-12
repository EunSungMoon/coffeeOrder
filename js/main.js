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
    this.orderBtnEvt();
  },

  wrapTemplate() {
    Menu.tabArray.forEach(function (arr) {
      let wrap = `
        <div class = "${arr.menu}Wrap wrap close" data-menu="${arr.menu}">
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
          <button class = "orderBtn" data-btnCode = "${menuInfo[key].btnCode}"><a href = "#">주문하기</a></button>
        </div>
      </li>
    `
      sel.el(`${wrapper}>ol`).insertAdjacentHTML('beforeend', template)
    }
  },

  orderBtnEvt() {
    let btns = sel.elAll('.orderBtn');

    for (const btn of btns) {
      btn.addEventListener('click', function () {
        location.href='selectOption.html'
      })
    }
  }
}
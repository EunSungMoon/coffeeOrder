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
    this.saveData();
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

  saveData() {
    let btns = sel.elAll('.orderBtn');
    for (const btn of btns) {
      btn.addEventListener('click', function () {
        let src = this.parentNode.parentNode.childNodes[1].src
        localStorage.setItem('data-code', this.parentNode.parentNode.dataset.code)
        console.log(this.parentNode.parentNode);
        console.log(src);
        console.log(src.substr(src.indexOf('g/')+2));
        for (let i = 0; i < this.parentNode.childNodes.length; i++) {
          localStorage.setItem('img', src.substr(src.indexOf('/css')));
          localStorage.setItem('title', this.parentNode.childNodes[1].textContent);
          localStorage.setItem('engTitle', this.parentNode.childNodes[3].textContent);
          localStorage.setItem('price', this.parentNode.childNodes[5].textContent);
        }
      })
    }
  },

  orderBtnEvt() {
    let btns = sel.elAll('.orderBtn');

    for (const btn of btns) {
      btn.addEventListener('click', function (e) {
        let url = btn.dataset.btncode
        location.href = 'selectOption.html?index=' + url
      })
    }
  }
}
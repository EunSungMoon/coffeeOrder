// import coffee from "./coffee.js";
import { sel } from "./common.js";
import Menu from "./menu.js";

// header
export default {
  init() {
    this.load();
    this.event();
  },

  load() {
    this.createHeader();
    this.createTabMenu();
  },

  event() {
    this.addClass()
    this.clickTab();
  },

  createHeader() {
    let titleDom = `
    <div class = "headWrap">
      <h1>Order</h1>
    </div>
    <nav><ol></ol></nav>
      `
    sel.el('.header').insertAdjacentHTML('afterbegin', titleDom)
  },

  createTabMenu() {
    Menu.tabArray.forEach(function (arr) {
      let tabDom = `
      <li class = "menuTab" data-menu = "${arr.menu}"><a href = "#">${arr.title}</a></li>
      `
      sel.el('ol').insertAdjacentHTML('beforeend', tabDom)
    })
  },

  clickTab() {
    let tabs = sel.elAll('.menuTab')
    for (const tab of tabs) {
      tab.addEventListener('click', this.removeClass)
    }
  },

  addClass() {
    let btns = sel.elAll('.menuTab')
    for (const btn of btns) {
      btn.addEventListener('click', function (e) {
        let menus = sel.elAll('.wrap')
        for (const menu of menus) { menu.classList.add('close') }
      })
    }
  },

  removeClass(e) {
    let target = e.currentTarget.dataset.menu
    switch (target) {
      case 'coffee':
        sel.el('.coffeeWrap').classList.remove('close')
        break;
      case 'nocoffee':
        sel.el('.nocoffeeWrap').classList.remove('close')
        break;
      case 'tea':
        sel.el('.teaWrap').classList.remove('close')
        break;
      case 'cake':  
        sel.el('.cakeWrap').classList.remove('close')
        break;
    }
  },
}
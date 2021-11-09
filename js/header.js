// import coffee from "./coffee.js";
import { sel } from "./common.js";
import Main from './main.js'
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
      <li class = "menuTab" data-tab = "${arr.tab}"><a href = "#">${arr.title}</a></li>
      `
      sel.el('ol').insertAdjacentHTML('beforeend', tabDom)
    })
  },

  clickTab() {
    let tabs = sel.elAll('.menuTab')
    for (const tab of tabs) {
      tab.addEventListener('click', this.clickNavEvent)
    }
  },

  clickNavEvent(e) {
    let target = e.currentTarget.dataset.tab
    switch (target) {
      case 'coffee':
        sel.el('.coffeeWrap').classList.remove('close')
        sel.el('.nocoffeeWrap').classList.add('close')
        sel.el('.teaWrap').classList.add('close');
        sel.el('.cakeWrap').classList.add('close')
        break;
      case 'nocoffee':
        sel.el('.nocoffeeWrap').classList.remove('close')
        sel.el('.coffeeWrap').classList.add('close')
        sel.el('.teaWrap').classList.add('close');
        sel.el('.cakeWrap').classList.add('close')
        break;
      case 'tea':
        sel.el('.teaWrap').classList.remove('close')
        sel.el('.coffeeWrap').classList.add('close')
        sel.el('.nocoffeeWrap').classList.add('close');
        sel.el('.cakeWrap').classList.add('close')
        break;
      case 'cake':
        sel.el('.cakeWrap').classList.remove('close')
        sel.el('.coffeeWrap').classList.add('close')
        sel.el('.nocoffeeWrap').classList.add('close');
        sel.el('.teaWrap').classList.add('close')
        break;
    }
  },

  hateRepition() {
    // let clickedTab = e.currentTarget
    // console.log(clickedTab);
    console.log('a');
  }
}
// import coffee from "./coffee.js";
import { sel } from "./common.js";
import Main from './main.js'
import menu from "./menu.js";

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
    <nav>
      <ol>
      </ol>
    <nav>
      `
    sel.el('.header').insertAdjacentHTML('afterbegin', titleDom)
  },

  createTabMenu() {
    menu.menuArray.forEach(function (arr) {
      let tabDom = `
      <li class = "menuTab" data-tab = "${arr.tab}Tab"><a href = "#">${arr.title}</a></li>
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
    // console.log(target);
    switch (target) {
      case 'coffeeTab':
        console.log('coffee');
        break;
      case 'nocoffeeTab':
        console.log('nocoffee');
        Main.display('.coffeeWrap', 'none');
        Main.menuTemplate('.nocoffeeWrap', menu.nocoffeeArray);
        break;
      case 'teaTab': console.log('tea');
        break;
      case 'adeTab': console.log('ade');
        break;
    }
  },
}

//main-> section 문제가... 클릭할때마다 계속 생겨..
/* <div class = "logo"></div> */
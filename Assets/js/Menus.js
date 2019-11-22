import {
    MDCMenu
} from '@material/menu';

const notifMenu = new MDCMenu(document.querySelector('#notification-menu'));
const catMenu = new MDCMenu(document.querySelector('#category-menu'));
notifMenu.open = false;
catMenu.open = false;

var notifBtn = $('#notification-btn');

if (notifBtn) {
    if (notifMenu.open != true) {
        notifBtn.click(function () {
            notifMenu.open = true;
        })
    } else {
        notifMenu.open = false;
    }
}

var catBtn = $('#category-btn');

if (catBtn) {
    if (catMenu.open != true) {
        catBtn.click(function () {
            catMenu.open = true;
        })
    } else {
        catMenu.open = false;
    }
}
import {
    MDCMenu
} from '@material/menu';

import {MDCMenuSurface} from '@material/menu-surface';

const menuSurface = new MDCMenuSurface(document.querySelector('.mdc-menu-surface'));

var notifMenuEl = document.querySelector('#notification-menu');

if (notifMenuEl) {
    const notifMenu = new MDCMenu(notifMenuEl);
    notifMenu.open = false;

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
}


var catMenuEl = document.querySelector('#category-menu');

if (catMenuEl) {
    const catMenu = new MDCMenu(catMenuEl);
    catMenu.open = false;

    var catBtn = $('#category-btn');

    if (catBtn) {
        if (catMenu.open != true) {
            catBtn.click(function () {
                catMenu.open = true;
            })
        }
    }
}

var editMenuEl = document.querySelector('#edit-menu');

if (editMenuEl) {
    const editMenu = new MDCMenu(editMenuEl);
    editMenu.open = false;

    var editBtn = $('#edit-btn');

    if (editBtn) {
        editMenu.setAbsolutePosition(80, 100);
        if (editMenu.open != true) {
            editBtn.click(function () {
                editMenu.open = true;
            })
        } else {
            editMenu.open = false;
        }
    }
}


var servMenuEl = document.querySelector('#services-menu');

if (servMenuEl) {
    const servMenu = new MDCMenu(servMenuEl);
    servMenu.open = false;

    var servBtn = $('#services-btn');

    if (servBtn) {
        if (servMenu.open != true) {
            servBtn.click(function () {
                servMenu.open = true;
            })
        } else {
            servMenu.open = false;
        }

    }

}
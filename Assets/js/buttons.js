import {
    MDCRipple
} from '@material/ripple/index.js';

const selector = '.mdc-button, mdc-top-app-bar__action-item, .mdc-card__primary-action, #drawerList, .mdc-radio, .mdc-list, .mdc-fab';
const ripples = [].map.call(document.querySelectorAll(selector), function (el) {
    return new MDCRipple(el);
});


const iconButtonRipple = new MDCRipple(document.querySelector('.mdc-icon-button'));
iconButtonRipple.unbounded = true;

var topViewBarEl = document.getElementById("top-view-bar");

if (topViewBarEl.style.display === 'flex') {
    $('#top-close-btn').click(function () {
        topViewBarEl.style.display = 'none';
    })
}

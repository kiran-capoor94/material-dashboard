import {
    MDCRipple
} from '@material/ripple/index.js';

const selector = '.mdc-button, mdc-top-app-bar__action-item, .mdc-card__primary-action, #drawerList, mdc-icon-button, .mdc-radio, .mdc-list';
const ripples = [].map.call(document.querySelectorAll(selector), function (el) {
    return new MDCRipple(el);
});
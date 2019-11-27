import {
    MDCNotchedOutline
} from '@material/notched-outline';

import {
    MDCTextField
} from '@material/textfield';
import {
    MDCTextFieldHelperText
} from '@material/textfield/helper-text';

import { MDCFloatingLabel } from '@material/floating-label';

const floatingLabel = new MDCFloatingLabel(document.querySelector('.mdc-floating-label'));

const helperText = new MDCTextFieldHelperText(document.querySelector('.mdc-text-field-helper-text'));

var notchLabel = document.querySelector('.mdc-notched-outline')
if (notchLabel) {
    const notchedOutline = new MDCNotchedOutline(notchLabel);
}

const fields = '.mdc-text-field, #searchField';
const textField = [].map.call(document.querySelectorAll(fields), function (el) {
    return new MDCTextField(el);
});
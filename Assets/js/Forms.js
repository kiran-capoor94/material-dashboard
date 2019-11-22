import {
    MDCFormField
} from '@material/form-field';
import {
    MDCNotchedOutline
} from '@material/notched-outline';
import {
    MDCRadio
} from '@material/radio';
import {
    MDCTextField
} from '@material/textfield';
import {
    MDCTextFieldHelperText
} from '@material/textfield/helper-text';

const helperText = new MDCTextFieldHelperText(document.querySelector('.mdc-text-field-helper-text'));

var notchLabel = document.querySelector('.mdc-notched-outline')
if (notchLabel) {
    const notchedOutline = new MDCNotchedOutline(notchLabel);
}

const fields = '.mdc-text-field, #searchField';
const textField = [].map.call(document.querySelectorAll(fields), function (el) {
    return new MDCTextField(el);
});

const radioEl = document.querySelector('.mdc-radio');

if (radioEl != null) {
    const radio = new MDCRadio(radioEl);
    const formField = new MDCFormField(document.querySelector('.mdc-form-field'));
    formField.input = radio;

} else {
    console.log("No Radio")
}
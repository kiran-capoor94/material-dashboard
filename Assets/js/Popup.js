import { MDCDialog } from '@material/dialog';


const supportdialogEl = document.querySelector('#support-dialog')
if (supportdialogEl) {
    const supportdialog = new MDCDialog(supportdialogEl);
    if (supportdialog) {
        $('#support-btn').click(function () {
            supportdialog.open()
        })
    }
}




import {
    MDCDrawer
} from "@material/drawer";

import topAppBar from "./navbar";

const drawer = MDCDrawer.attachTo(document.querySelector('.mdc-drawer'));

topAppBar.listen('MDCTopAppBar:nav', () => {
    drawer.open = !drawer.open;
});
import {
    MDCTopAppBar
} from "@material/top-app-bar";

const topAppBar = MDCTopAppBar.attachTo(document.getElementById('app-bar'));

topAppBar.setScrollTarget(document.getElementById('main-content'));

export default topAppBar;
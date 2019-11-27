import { MDCTabBar } from '@material/tab-bar';

const jobTabBar = new MDCTabBar(document.querySelector('#job-tab-bar'));
var jobTab1Btn = $("#job-tab-1-btn");
var jobTab1 = document.getElementById('tab-1');
var jobTab2Btn = $("#job-tab-2-btn");
var jobTab2 = document.getElementById('tab-2');
var jobTab3Btn = $("#job-tab-3-btn");
var jobTab3 = document.getElementById('tab-3');

if (jobTabBar) {

    jobTab1Btn.click(function () {

        jobTab1.style.display = "block"
        jobTab2.style.display = "none"
        jobTab3.style.display = "none"
    });

    jobTab2Btn.click(function () {

        jobTab1.style.display = "none"
        jobTab2.style.display = "block"
        jobTab3.style.display = "none"
    });

    jobTab3Btn.click(function () {

        jobTab1.style.display = "none"
        jobTab2.style.display = "none"
        jobTab3.style.display = "block"
    });
}

import { MDCDataTable } from '@material/data-table';



const campaignTableEl = document.querySelector('.mdc-data-table')
if (campaignTableEl) {
    const campaignTable = new MDCDataTable(campaignTableEl);
}

import { getBeanies, getSigns } from './lib/supabase.js';
import { renderBeanie, renderSign } from './lib/render-utils.js';

const searchForm = document.getElementById('search-form');
const searchDropdown = document.getElementById('sign-select');
const submit = document.getElementById('submit');
const beanieList = document.getElementById('beanie-list');

let beanies = [];
let signs = [];

window.addEventListener('load', () => {
    fetchBenies();
    fetchSigns();
});

async function fetchBenies(sign) {
    const rawBeanies = await getBeanies(sign);
    console.log(rawBeanies);
    if (rawBeanies.error) return;
    beanies = rawBeanies.data;
    displayBeanies();
    console.log(beanies);
}

async function fetchSigns() {
    const rawSigns = await getSigns();
    if (rawSigns.error) return;
    signs = rawSigns.data;
    displaySigns();
    console.log(signs);
}

function displaySigns() {
    for (const item of signs) {
        searchDropdown.append(renderSign(item));
    }
}

function assembleBeanie() {}

function displayBeanies() {}

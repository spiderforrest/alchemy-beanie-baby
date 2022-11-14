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

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(searchForm);
    fetchBenies(formData.get('sign'));
});

async function fetchBenies(sign) {
    const rawBeanies = await getBeanies(sign);
    if (rawBeanies.error) return;
    beanies = rawBeanies.data;
    displayBeanies();
}

async function fetchSigns() {
    const rawSigns = await getSigns();
    if (rawSigns.error) return;
    signs = rawSigns.data;
    displaySigns();
}

function displaySigns() {
    for (const item of signs) {
        searchDropdown.append(renderSign(item));
    }
}

function displayBeanies() {
    beanieList.textContent = '';
    for (const item of beanies) {
        beanieList.append(renderBeanie(item));
    }
}

export function renderBeanie(beanie) {
    const li = document.createElement('li');
    const img = document.createElement('img');
    const h2 = document.createElement('h2');
    const p = document.createElement('p');

    li.classList.add('card');

    img.src = beanie.img;
    img.alt = `A picture of ${beanie.name}`;

    h2.textContent = beanie.name;

    p.textContent = beanie.sign;

    li.append(h2, img, p);

    return li;
}

export function renderSign(sign) {
    const option = document.createElement('option');
    option.value = sign.name;
    option.textContent = sign.name;
    return option;
}

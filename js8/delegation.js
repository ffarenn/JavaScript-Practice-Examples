const container = document.querySelector('.js-container');

container.addEventListener('click', onClick);

function onClick(e) {
    if (e.target.nodeName !== 'BUTTON') {
        return;
    }
    // if (e.target.nodeName !== 'DIV') {
    //     return console.log('not even');
    // }
    console.log(e.target.nodeName);
    console.log(e.target);
    console.log(e.target.textContent);
 }

const addBtn = document.querySelector('.js-add-btn');
let labelCounter = 6;

addBtn.addEventListener('click', onAddBtnClick);

function onAddBtnClick() {
    const btn = document.createElement('button');
    btn.textContent = `button ${labelCounter}`;

    container.appendChild(btn);
    labelCounter += 1;
}
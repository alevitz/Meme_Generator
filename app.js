const addItemUrl = document.querySelector('input#addItemUrl');
const addItemTextBottom = document.querySelector('input#addItemTextBottom');
const addItemTextTop = document.querySelector('input#addItemTextTop');
const addItemButton = document.querySelector('button.addItemButton');
const removeItemButton = document.querySelector('button.removeItemButton');

addItemButton.addEventListener('click', () => {
    let parentDiv = document.getElementById('imageDiv');
    let div = document.createElement('div');
    let divTopText = document.createElement('div');
    let divBottomText = document.createElement('div');
    let img = document.createElement('img');
    img.src = addItemUrl.value;
    parentDiv.appendChild(div);
    div.appendChild(img);
    div.appendChild(divTopText);
    div.appendChild(divBottomText);
    div.className = 'container';
    divTopText.className = 'topText'
    divBottomText.className = 'bottomText'
    divTopText.textContent = addItemTextTop.value;
    divBottomText.textContent = addItemTextBottom.value;
    addItemUrl.value = '';
    addItemTextBottom.value = '';
    addItemTextTop.value = '';
});


removeItemButton.addEventListener('click', () => {
    let parentDiv = document.getElementById('imageDiv');
    let div = document.querySelector('.container:last-child');
    parentDiv.removeChild(div);
});

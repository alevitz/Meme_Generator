const addItemUrl = document.querySelector('input#addItemUrl');
const addItemTextBottom = document.querySelector('input#addItemTextBottom');
const addItemTextTop = document.querySelector('input#addItemTextTop');
const addItemButton = document.querySelector('button.addItemButton');
const removeItemButton = document.querySelector('button.removeItemButton');
const imgDiv = document.querySelector('#imageDiv');

addItemButton.addEventListener('click', () => {
    let parentDiv = document.getElementById('imageDiv');
    let div = document.createElement('div');
    let divTopText = document.createElement('div');
    let divBottomText = document.createElement('div');
    let divRemoveButton = document.createElement('button');
    let img = document.createElement('img');
    img.src = addItemUrl.value;
    parentDiv.appendChild(div);
    div.appendChild(img);
    div.appendChild(divTopText);
    div.appendChild(divBottomText);
    div.appendChild(divRemoveButton);
    div.className = 'container';
    divTopText.className = 'topText'
    divBottomText.className = 'bottomText'
    divRemoveButton.textContent = "Remove Meme"
    divRemoveButton.className = 'removeButton'
    divTopText.textContent = addItemTextTop.value;
    divBottomText.textContent = addItemTextBottom.value;
    addItemUrl.value = '';
    addItemTextBottom.value = '';
    addItemTextTop.value = '';
});

imgDiv.addEventListener('click', (event) => {
    if (event.target.tagName == 'BUTTON') {
        let div = event.target.parentNode;
        let body = div.parentNode;
        body.removeChild(div);
    }
});


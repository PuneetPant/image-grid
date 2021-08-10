let card = document.querySelector('.box');
function populateBoxes(data) {
    let container = document.querySelector('.container');
    removeItemWithClass('card');

    data.forEach((key, idx) => {
        let node = card.cloneNode(true);
        node.classList.remove('prototype');
        node.classList.add('card');
        node.classList.remove('hidden');

        let getImage = node.querySelector('.box-inner .box-front img');
        getImage.setAttribute('data-src', key.urls.regular);
        let textSection = node.querySelector(".box-inner .box-back p");
        textSection.innerHTML = key.alt_description;
        let deleteIcon = node.querySelector(".box-inner .box-back i");
        deleteIcon.setAttribute('id', key.id);

        container.appendChild(node);
    })
    lazyLoad();
}

function removeItemWithClass(val) {
    var paras = document.getElementsByClassName(val);

    while (paras[0]) {
        paras[0].parentNode.removeChild(paras[0]);
    }
}

function handleDelete(ele) {
    let data = getFromLocalStorage('contentData');
    let filteredData = data.filter(key => {
        return key.id !== ele.id;
    });
    setInLocalStorage('contentData', filteredData);
    populateBoxes(filteredData);
}

function shuffleCards() {
    let arr = getFromLocalStorage('contentData');

    for (var i = arr.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    setInLocalStorage('contentData', arr);
    populateBoxes(arr);
}

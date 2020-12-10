function selectMenu(arrry){
    //创建seletor外层
    let selector = document.createElement('div');
    selector.setAttribute('class', 'menu-selector');
    //创建search内容栏
    let selectorSearch = document.createElement('span');
    selectorSearch.setAttribute('class', 'menu-selector-search');
    selector.appendChild(selectorSearch);
    //创建内容
    for(let i=0; i<arrry.length; i++){
        let selectorItem = document.createElement('span');
        selectorItem.setAttribute('class', 'menu-selector-item');
        selector.appendChild(selectorItem);
        selectorItem.innerHTML = arrry[i];
    }
    

    //创建下拉箭头
    let selectorArrow = document.createElement('span');
    selectorArrow.setAttribute('class', 'menu-selector-arrow');
    let arrowImg = document.createElement('img');
    arrowImg.src = "image/下拉箭头.png";
    arrowImg.alt = "下拉箭头";

    selectorArrow.onclick = function(){

    }

    let nameMenu = document.getElementsByClassName('name-menu');
    
    
    selectorArrow.appendChild(arrowImg);
    selector.appendChild(selectorArrow);
    nameMenu.appendChild(selector);
    
}
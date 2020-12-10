function pop(data){
    let poptipLeft = document.createElement('div');
    poptipLeft.setAttribute('class', 'poptip-left');
    
    let content = document.createElement('div');
    content.setAttribute('class', 'poptip-content');
    
    let arrow = document.createElement('div');
    arrow.setAttribute('class', 'poptip-arrow');
    let arrowContent = document.createElement('span');
    arrowContent.setAttribute('class', 'poptip-arrow-content');
    
    let inner = document.createElement('div');
    inner.setAttribute('class', 'poptip-inner');
    let span = document.createElement('span');
    span.innerHTML = data;

    poptipLeft.appendChild(content);
    content.appendChild(arrow);
    content.appendChild(inner);
    arrow.appendChild(arrowContent);
    inner.appendChild(span);
    
}


function showModal(data){
    //最外层内容div
    let content = document.createElement('div');
    content.setAttribute('class', 'modal-content');
    
    //关闭按钮
    let btn = document.createElement('button');
    btn.setAttribute('class', 'modal-close');
    btn.innerHTML = '×';
    
    //标题头
    let header = document.createElement('div');
    header.setAttribute('class', 'modal-header');
    let title = document.createElement('div');
    title.setAttribute('class', 'modal-title');
    title.innerHTML = '对话框';

    //涵盖提示文字div
    let modalbody = document.createElement('div');
    modalbody.setAttribute('class', 'modal-body');
    //提示的文字
    let p = document.createElement('p');
    textNode = document.createTextNode(data);

    //存放按钮底部
    let footer = document.createElement('div');
    footer.setAttribute('class', 'modal-footer');
    //确认按钮
    let btncfm = document.createElement('button');
    btncfm.setAttribute('class', 'btn-primary');
    btncfm.innerHTML = '确认';

    //遮罩层
    let wrap = document.createElement('div');
    wrap.setAttribute('class', 'modal-wrap');

    p.appendChild(textNode);
    footer.appendChild(btncfm);
    modalbody.appendChild(p);
    header.appendChild(title);
    content.appendChild(header);
    content.appendChild(btn);
    content.appendChild(modalbody);
    content.appendChild(footer);
    document.body.appendChild(wrap);
    document.body.appendChild(content);

    btn.onclick = function(){
    document.body.removeChild(content);
    document.body.removeChild(wrap);
    }

    btncfm.onclick = function(){
    document.body.removeChild(content);
    document.body.removeChild(wrap);
    }
}

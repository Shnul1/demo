function notificateMsg(data){
    createNode();
    setTimeout(function(){
        let notificationNums = document.getElementsByClassName('notificate-content');
        document.body.removeChild(notificationNums[0]);
    }, 4500)
    function createNode(){
        //最外层内容div
        let content = document.createElement('div');
        content.setAttribute('class', 'notificate-content');
    
        //关闭按钮
        let btn = document.createElement('button');
        btn.setAttribute('class', 'notificate-close');
        btn.innerHTML = '×';
    
        //标题头
        let header = document.createElement('div');
        header.setAttribute('class', 'notificate-header');
        let title = document.createElement('div');
        title.setAttribute('class', 'notificate-title');
        title.innerHTML = 'Notification Title';
    
        //涵盖提示文字div
        let notificatebody = document.createElement('div');
        notificatebody.setAttribute('class', 'notificate-body');
        //提示的文字
        let p = document.createElement('p');
        textNode = document.createTextNode(data);
    
        p.appendChild(textNode);
        notificatebody.appendChild(p);
        header.appendChild(title);
        content.appendChild(header);
        content.appendChild(btn);
        content.appendChild(notificatebody);
        document.body.appendChild(content);

        let btnNums = document.getElementsByClassName('notificate-close');
        let notificationNums = document.getElementsByClassName('notificate-content');
        for(let i=0; i<notificationNums.length; i++){
            btnNums[i].onclick = function (){
                document.body.removeChild(notificationNums[i]);
            }
        }
    }
}


// function autoClose(){
//     setTimeout(function(){
        
//     }, 4500);
// }

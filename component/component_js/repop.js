function showToolTip(e,text){
	if(document.all)e = event;
	var obj = document.getElementById('bubble_tooltip');
	var obj2 = document.getElementById('bubble_tooltip_content');
	obj2.innerHTML = text;
	var st = Math.max(document.body.scrollTop,document.documentElement.scrollTop);
	if(navigator.userAgent.toLowerCase().indexOf('safari')>=0)st=0; 
	var leftPos = e.clientX + 20;  //clientX 事件属性返回当事件被触发时鼠标指针相对于浏览器页面（或客户区）的水平坐标
	if(leftPos<0)leftPos = 0;
	obj.style.left = leftPos + 'px';
	obj.style.top = e.clientY + st + 'px';
	obj.style.display = 'block';
	fadeIn(obj,5,100);
}	
 
function hideToolTip()
{
	var obj = document.getElementById('bubble_tooltip');
	//obj.style.display = 'none';
	fadeOut(obj,5,0);
}
 
//设置元素透明度,透明度值按IE规则计,即0~100
function SetOpacity(ev, v){
    ev.filters ? ev.style.filter = 'alpha(opacity=' + v + ')' : ev.style.opacity = v / 100;
}
 
//淡入效果(含淡入到指定透明度)
function fadeIn(elem, speed, opacity){
	/*
	 * 参数说明
	 * elem==>需要淡入的元素
	 * speed==>淡入速度,正整数(可选)
	 * opacity==>淡入到指定的透明度,0~100(可选)
	 */
    speed = speed || 20;
    opacity = opacity || 100;
	//显示元素,并将元素值为0透明度(不可见)
    elem.style.display = 'block';
    SetOpacity(elem, 0);
	//初始化透明度变化值为0
    var val = 0;
	//循环将透明值以2递增,即淡入效果
    (function(){
        SetOpacity(elem, val);
        val += 5;
        if (val <= opacity) {
            setTimeout(arguments.callee, speed)
        }
    })();
}
 
//淡出效果(含淡出到指定透明度)
function fadeOut(elem, speed, opacity){
	/*
	 * 参数说明
	 * elem==>需要淡入的元素
	 * speed==>淡入速度,正整数(可选)
	 * opacity==>淡入到指定的透明度,0~100(可选)
	 */
    speed = speed || 20;
    opacity = opacity || 0;
    //初始化透明度变化值为0
    var val = 100;
	//循环将透明值以5递减,即淡出效果
    (function(){
        SetOpacity(elem, val);
        val -= 5;
        if (val >= opacity) {
            setTimeout(arguments.callee, speed);
        }else if (val < 0) {
			//元素透明度为0后隐藏元素
            elem.style.display = 'none';
        }
    })();
}
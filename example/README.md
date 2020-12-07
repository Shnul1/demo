上周整理的知识，放在了ProcessOn里：https://www.processon.com/view/link/5fce131ce401fd19980ee711

周一的任务主要是写一个简单的demo，用到上周这本书中讲到的一些知识点

基础html文件是定义了一个nav导航栏和一个container中间栏，中间栏放置了轮播图（用JS实现）。

![文件结构](C:\Users\孙浩\AppData\Roaming\Typora\typora-user-images\image-20201207201255343.png)

定义了一个global.css的全局文件，重置了html和body：

```CSS
html, body{
    margin: 0;
    padding: 0;
    height: 100%;
}
```

导航栏使用了《CSS世界》中所讲的z-index属性：

```css
.top-nav{
    z-index: 2;
    width: 100%;
    height: 50px;
    box-sizing: border-box;
    position: fixed;
    background-color: white;
    top: 0;
}
```

z-index属性：z-index 属性设置元素的堆叠顺序。拥有更高堆叠顺序的元素总是会处于堆叠顺序较低的元素的前面。

然后下面的轮播图效果用到了position定位，flex布局和float布局，将书中提到的布局用了一遍：

```css
#slider-banner{
    width: 400px;
    height: 400px;
    margin: 100px auto;
    background-color: black;
    position: relative;
    overflow: hidden;
}

#slider-imgList{
    list-style: none;
    padding: 0;
    margin: 0;
    height: 400px;
    position: absolute;
}

#slider-imgList li{
    float: left;
}

#slider-nav{
    width: 80px;
    display: flex;
    position: absolute;
    flex-direction: row;
    justify-content: space-between;
    bottom: 10px;
}
```

在做的时候，因为轮播图用到了ul，ul是块级元素，同样在html中默认样式的块级元素还有 div、h1-h、p、pre、ul、ol、li、form、table、label，注意在使用div作为父元素时，一定要将元素的margin，padding重置，不然会导致子元素不会被包裹进去。（千万千万要注意）

然后就是简单轮播图的JS代码：

```javascript
window.onload = function(){

    var sliderImgList = document.getElementById('slider-imgList');
    var sliderImgArr = sliderImgList.getElementsByTagName('li');
    sliderImgList.style.width = 400*sliderImgArr.length+"px";

    var sliderBanner =document.getElementById('slider-banner');
    var sliderNav = document.getElementById('slider-nav');
    sliderNav.style.left = (sliderBanner.offsetWidth - sliderNav.offsetWidth)/2+"px";

    var index = 0;
    var selectA = sliderNav.getElementsByTagName('a');
    selectA[index].style.backgroundColor = "darkcyan";

    autoChange();

    for(let i=0; i<selectA.length; i++){
        selectA[i].num = i;
        selectA[i].onclick = function(){
            clearInterval(timer);
            index = this.num;
            sliderImgList.style.left = -400*index + "px";
            setA();
            autoChange();
        }
    }

    function setA(){
        for(let i=0; i<selectA.length; i++){
            selectA[i].style.backgroundColor = "";
        }
        selectA[index].style.backgroundColor = "darkcyan";
    }

    var timer;
    function autoChange(){
        timer =setInterval(function(){
            index++;
            index %= sliderImgArr.length;
            sliderImgList.style.left = -400*index + "px";
            setA();
        },3000)
    }
}
```


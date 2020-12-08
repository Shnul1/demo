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
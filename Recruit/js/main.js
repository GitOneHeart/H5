var mySwiper = new Swiper ('.swiper-container', {	
	direction: 'vertical',
	loop: false,
	onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
    	swiperAnimateCache(swiper); //隐藏动画元素 
    	swiperAnimate(swiper); //初始化完成开始动画
	}, 
    onSlideChangeEnd: function(swiper){
            swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
//          switch (swiper.activeIndex) {
//              case 1:
//                  setTimeout(function(){
//                      $(".title6").css({
//                          animation: 'flash 1s linear 0s infinite'
//                      })
//                  },5000);//定时器时间是上一个动画执行时间
//                  break;
//              case 2:
//          }
    }
})    
var music=document.getElementById('music');
var audio=document.getElementsByTagName('audio')[0];   
music.addEventListener('touchstart',function(){
	if(audio.paused){
		audio.play();
		this.setAttribute('class','play');
		this.style.backgroundImage='url(./img/play.png)';
	}else{
		audio.pause();
		this.setAttribute('class','');
		this.style.backgroundImage='url(./img/pause.png)';
	}
},false);

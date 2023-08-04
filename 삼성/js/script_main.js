'use strict';
//
	$(function() {
		var scrollTop = 0;
        //스크롤했을때 이벤트 적용
		scrollTop = $(document).scrollTop();
		ani('.welstory1, .welstory2, .welstory3, .smart, .news, .typewriter, .welstory, .vision, .sustainability, .location ,.business ,.brand ,.rnd ,.event ,.place, .competitive, .distribution, .productnbrand, .competitive, .infra, .solution, .customer , .pressRelease');
		
        //윈도우창사이즈 조절시 동일하게 이벤트 적용
		$(window).on('scroll resize', function() {
			scrollTop = $(document).scrollTop();
            ani('.welstory1, .welstory2, .welstory3, .smart, .news, .typewriter, .welstory, .vision, .sustainability, .location ,.business ,.brand ,.rnd ,.event ,.place, .competitive, .distribution, .productnbrand, .competitive, .infra, .solution, .customer , .pressRelease');
		});
        
        //함수선언 ani-함수명/(selector)-선택자
		function ani(selector) {
				$(selector).each(function() {
                        //변수선언
						var $selector = $(this);
						var minShow = $selector.offset().top - $(window).height();//offset: 선택한 요소의 좌표를 가져옴
						var maxShow = $selector.offset().top + $selector.outerHeight();
                        //리무브클래스를 주면 이벤트가 지워지기 때문에 스크롤 할때마다 이벤트나타남
//				        $selector.removeClass(''); // <- 이거 주석처리하면 이벤트 딱 한번씩만 나타남
                        //이벤트 붙이기
						if (scrollTop < minShow) { 
								$selector.addClass('down'); //스크롤이 selector요소의 위쪽일때  down이라는 가상 이벤트 부여
						} else if (scrollTop > maxShow) {
								$selector.addClass('up'); //스크롤이 selector요소의 밑쪽일때  up이라는 가상 이벤트 부여
						} else {
								$selector.addClass('on'); //스크롤이 selector요소에 위치했을때 on이벤트 부여
						}
				});
		}
	});
 

  $(function setGnb() {
        $(".gnb > ul > li > a").on("mouseenter focus", function() {//마우스가 영역에 위치하면
            var offsetLeft = $(this).position().left;//gnb>a의 left위치값을 반환
            var width = $(this).width(); //gnb>a의 width값을 반환
            $(".gnb > ul > li > ul").css({"display": "none"}); 
            $(this).next().css({"display": "block"});
            $("header").addClass("on");  //클래스on을 추가하라
            $(".gnb span.bar").css({"left": offsetLeft + "px", "width": width + "px"}); //gnb>a의 위칫값과 위드값을 가져라
        });
      
        $("header").on("mouseleave", function() { //마우스가 떠나면
            $(".gnb > ul > li > ul").css({"display": "none"});
            $("header").removeClass("on"); //클래스를 지워라
            $(".gnb span.bar").css({"left": 0, "width": 0});
        });                                
    });
    //mo gnb
       $(function setGnbMo() {
        $("header .menuOpen").on("click", function() {
            $(".gnb_mo").addClass("on");
        });    
        $(".gnb_mo .close").on("click", function() {
            $(".gnb_mo").removeClass("on");
            $(".gnb_mo > ul > li .inner").slideUp();
            $(".gnb_mo > ul > li > a").removeClass("on");
        }); 
        //이너메뉴열기
         $(".gnb_mo > ul > li > a").on("click", function() {
            $(this).next().slideToggle(); //슬라이드업되고 다운되라
            $(this).toggleClass("on"); //on클래스를 추가하고 제거해라            
        });
    }); 
  $(function() {
 $('.animate').scrolla({
        mobile:false,//모바일 해제
        once:false //스크롤시 딱 한번만 하고싶을땐 true
    });
	   });


//
$(function(){
	 var modal = document.getElementById('id01');

        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        };

});

$( function () {
  /*
        현재 브라우저의 높이 값을 가져와서 컨텐츠 영역(section)의 높이에 대입
        -> 실시간으로 연동 : 브라우저 높이 == 컨텐츠 높이
    */
 
    /*변수에 브라우저의 높이값을 저장*/
    var ht = $(window).height();
 
    /*가져온 브라우저의 높이를 컨텐츠(section)에 지정(연동)*/
    $('section').height(ht);
 
 
    /*
        브라우저의 리사이즈 발생시 화면이 뒤틀리는 문제점 해결
        -> 사용자가 브라우저 높이를 변경할 때마다 계속 갱신
    */
 
    /*브라우저의 크기가 변경되면 함수 실행*/
    $(window).on('resize', function () {
        /*현재 브라우저의 높이값을 가져와 변수에 저장*/
        var ht = $(window).height();
 
        /*가져온 높이 적용*/
        $('section').height(ht);
    });
 
 
 
 
    /*
        메뉴 선택시 상하 자동 스크롤 기능 구현
    */
 
    /*메뉴 선택(클릭)시 실행하는 함수*/
    $('#menu li').on('click', function (e) {
 
        /*a 클릭시 링크 동작 기능(새로 고침되면서 깜빡이는 현상) 해제*/
        e.preventDefault();
 
        /*현재 브라우저의 높이값을 가져와서 저장*/
        var ht = $(window).height();
 
        /*클릭한 메뉴(li)의 순서(index)를 변수에 저장
            this : 현재 실행되고 있는 개체
                    상위 요소 중 가장 가까운 선택자
		*/
        var i = $(this).index();
 
        /*	브라우저의 높이(height) x 페이지의 순서(index) 
            = 현재 페이지의 스크롤 위치 값(scrollTop)
		*/
 
        var nowTop = i * ht;
 
        /*계산된 스크롤 위치값으로 문서 이동(애니메이션)*/
        $('html, body').stop().animate({
            "scrollTop": nowTop
        }, 1300); /*애니메이션 시간: 1300ms*/
    });
 
 
 
 
    /*
        화면이 스크롤 될 때 해당 영역의 메뉴(li) 활성화
	*/
 
    /*브라우저가 스크롤 되면 실행하는 함수*/
    $(window).on('scroll', function () {
 
        /*현재 브라우저의 높이를 저장*/
        var ht = $(window).height();
 
        /*현재 문서가 스크롤 된 높이(거리)를 변수에 저장*/
        var scroll = $(window).scrollTop();
 
        /*각 페이지 영역 내에서 on 클래스 부여*/
        /*1페이지 영역*/
        if (scroll >= ht * 0 && scroll < ht * 1) {
            /*기존 클래스 제거*/
            $('#menu li').removeClass();
            /*1페이지(index 0)에 클래스 부여*/
            $('#menu li').eq(0).addClass('on');
        }
        /*2페이지 영역*/
        if (scroll >= ht * 1 && scroll < ht * 2) {
            /*기존 클래스 제거*/
            $('#menu li').removeClass();
            /*1페이지(index 1)에 클래스 부여*/
            $('#menu li').eq(1).addClass('on');
        }
        /*3페이지 영역*/
        if (scroll >= ht * 2 && scroll < ht * 3) {
            /*기존 클래스 제거*/
            $('#menu li').removeClass();
            /*1페이지(index 0)에 클래스 부여*/
            $('#menu li').eq(2).addClass('on');
        }
        /*4페이지 영역*/
        if (scroll >= ht * 3 && scroll < ht * 4) {
            /*기존 클래스 sct >= ht * 0 &&  sct < ht * 1제거*/
            $('#menu li').removeClass();
            /*1페이지(index 0)에 클래스 부여*/
            $('#menu li').eq(3).addClass('on');
        }
 
 
        /*반복문을 이용한 일반화 코드(가변 메뉴에 대응)*/
        /*for ( var i = 0; i < 5; i++ ) {
            if ( scroll >= ht * i && scroll < ht * ( i + 1 ) ) {
                $( '#menu li' ).removeClass();
                $( '#menu li' ).eq( i ).addClass( 'on' );
            }
        }*/
 
    });
 
 
 
 
    /*
        마우스 휠 이동에 따른 스크롤 애니메이션 구현
        - jquery.mousewheel.min.js 와 연동 -> 휠 스크롤(드래그)
        - jquery.easing.1.3.js 와 연동 -> 애니메이션 easing 효과
	*/
 
    $('section').on('mousewheel', function (event, d) {
 
        /*마우스 휠 위로 드래그(스크롤)*/
        if (d > 0) {
            /*현재 움직인 영역에서 이전 영역의 offset().top 위치 저장*/
            var prev = $(this).prev().offset().top;
 
            /*문서를 prev에 저장된 위치로 애니메이트*/
            $('html, body').stop().animate({
                "scrollTop": prev
            }, 1300, "easeOutBounce");
        }
 
        /*마우스 휠 아래로 드래그(스크롤)*/
        if (d < 0) {
            /*현재 움직인 영역에서 다음 영역의 offset().top 위치 저장*/
            var next = $(this).next().offset().top;
 
            /*문서를 prev에 저장된 위치로 애니메이트*/
            $('html, body').stop().animate({
                "scrollTop": next
            }, 1300, "easeOutBounce");
        }
 
    });
 
 
 
 
    /*
        마우스 움직임에 반응하는 전경 이미지 기능 구현
	*/
 
    $('section').on('mousemove', function (e) {
 
        /*마우스 커서의 x좌표/y좌표 위치 저장*/
        var posX = e.pageX;
        var posY = e.pageY;
 
 
        /*
            각 페이지의 전경 이미지의 위치를 마우스 커서의 위치와 연동
            -> css 의 전경 이미지 위치 참고
            -> posX와 posY를 나누는 값이 
                클수록 움직임은 적어지고
                작을수록 움직임은 커진다!
		*/
 
        /*1페이지*/
        $('.p11').css({ /**/
            'right': 20 - (posX / 30),
            'bottom': 20 - (posY / 30)
        });
        $('.p12').css({
            'right': 130 + (posX / 20),
            'bottom': -40 + (posY / 20)
        });
        $('.p13').css({
            'right': 60 + (posX / 20),
            'top': 180 + (posY / 20)
        });
 
        /*2페이지*/
        $('.p21').css({
            'right': -180 - (posX / 30),
            'bottom': -480 - (posY / 30)
        });
        $('.p22').css({
            'right': 130 + (posX / 50),
            'bottom': -40 + (posY / 50)
        });
 
        /*3페이지*/
        $('.p31').css({
            'right': 280 - (posX / 30),
            'bottom': 30 - (posY / 30)
        });
        $('.p32').css({
            'right': 110 + (posX / 20),
            'bottom': -270 + (posY / 20)
        });
        $('.p33').css({
            'right': -70 + (posX / 20),
            'bottom': -130 + (posY / 20)
        });
 
        /*4페이지*/
        $('.p41').css({
            'right': 20 - (posX / 30),
            'bottom': -120 - (posY / 30)
        });
        $('.p42').css({
            'right': 0 - (posX / 20),
            'bottom': -180 - (posY / 20)
        });
 
    });

	

} );
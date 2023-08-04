$( function () {
	
   /* 페이지 로딩시 스크롤을 브라우저 최상단으로 이동*/
    $( 'body, html' ).stop().animate( {
        'scrollTop' : 0
    }, 1500, 'swing' );
    
    
    
    /*스크롤 기능 구현*/
    $( window ).scroll( function () {
        
        /*현재 화면의 스크롤 거리 값 저장*/
        var scroll = $( this ).scrollTop();
        
        for ( var i = 0; i < 5; i++ ) {
            /*스크롤 된 값과 각 페이지의 z 값 연결*/
            $( 'section > article' ).eq( i ).css( {
                'transform' : 'translateZ(' +
                        + parseInt( ( -5000 * i ) + scroll )
                        + 'px)'
            } );
            
            
            /*해당 페이지 영역에서 서브 내비게이션 연결*/
            if ( scroll >= i * 5000 && scroll < ( i + 1 ) * 5000 ) {
                /*기존 클래스(.on) 제거*/
                $( '.scrollNav li' ).removeClass();
                /*현재 페이지에 클래스(.on) 부여*/
                $( '.scrollNav li' ).eq( i ).addClass( 'on' );
                
                $( 'article' ).removeClass();
                $( 'article' ).eq( i ).addClass( 'on' );
            }
        }
        
    } );
    
    
    
    /*서브 내비게이션 선택(클릭)시 페이지(스크롤) 이동*/
    $( '.scrollNav li' ).on( 'click', function () {
        
        var mov = $( this ).index();
        $( 'body, html' ).stop().animate( { 
            'scrollTop' : 5000 * mov
        }, 1500, 'swing' );
        
    } );
    
    
    
    
    /*이미지시퀀스 효과(마우스 이동시 전경 이미지(.obj~~) 움직임 구현*/
    $( 'body' ).on( 'mousemove', function ( e ) {
        
        /*가로(x), 세로(y) 마우스 커서 위치 저장*/
        var posX = e.pageX/100;
        var posY = e.pageY/150;
        
        /*1페이지*/
        $( '.obj11' ).css( { 
            'left': -270 - posX, 'bottom': -100 - posY 
        } );
        $( '.obj12' ).css( { 
            'right': -590 - posX, 'top': -90 + posY 
        } );
        $( '.obj13' ).css( { 
            'left': -100 + posX, 'bottom': 20 + posY 
        } );
        
        /*2페이지*/
        $( '.obj21' ).css( { 
            'right': -710 - posX, 'bottom': -420 - posY 
        } );
        $( '.obj22' ).css( { 
            'right': -50 + posX, 'bottom': -100 + posY 
        } );
        
        /*3페이지*/
        $( '.obj31' ).css( { 
            'right': 110 - posX, 'bottom': -70 - posY 
        } );
        $( '.obj32' ).css( { 
            'left': 100 - posX, 'bottom': -160 - posY 
        } );
        
        /*4페이지*/
        $( '.obj41' ).css( { 
            'left': 350 + posX, 'bottom': -150 - posY 
        } );
        $( '.obj42' ).css( { 
            'right': 170 + posX, 'top': -260 - posY 
        } );
        $( '.obj43' ).css( { 
            'right': -100 + posX, 'bottom': -120 + posY 
        } );
        
        /*5페이지*/
        $( '.obj51' ).css( { 
            'left': -100 - posX, 'bottom': -300 - posY 
        } );
        $( '.obj52' ).css( { 
            'right': 30 + posX, 'top': 180 - posY 
        } );
        $( '.obj53' ).css( { 
            'left': -30 + posX, 'bottom': 0 - posY 
        } );
    } );
 
} );
  


















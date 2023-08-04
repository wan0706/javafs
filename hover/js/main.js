$( function () {  		
$( function () {  		
    
    // 메뉴 영역에 마우스가 올라가면 실행하라!
    $( 'div.nav' ).on( 'mouseover', function () {
       
        /*변수에 video 파일을 찾아서 저장 */
        var vid = $( this ).find( 'video' ).get( 0 );
        
        /*동영상의 재생 위치를 처음(0초) 위치로 지정*/
        vid.currentTime = 0;
        
        /*동영상 재생*/
        vid.play();
        
        
        /*  숨겨진 동영상을 보여 주는 애니메이션
        	메뉴에 호버되면 1초(1000)동안 메뉴 너비를 넓게 하고
        	지정한 함수의 내용을 실행하라
		*/
        $( this ).stop().animate( { 'width' : '35%' }, 1000, function () {
        
            /*	h3을 찾아서 0.4초 동안 오른쪽으로부터 10px 위치까지 나오도록 
				애니메이션을 실행하라
			*/
            $( this ).find( 'h3' ).stop().animate( { 'right' : '10px' }, 400 );
            $( this ).find( 'p' ).stop().animate( { 'right' : '10px' }, 800 );
    	} );
 
        /* 메뉴 영역이 넓어진 후, 투명도를 지정하는 애니메이션을 실행하라 */
    	$( this ).find( 'video' ).stop().animate( { 'opacity' : '0.9' }, 1200 ); 
		
    } );
 
 
	
    /*메뉴 영역에서 빠져나갈때 실행*/
    $( 'div.nav' ).on( 'mouseout', function () {
    
        /*변수에 video 파일을 찾아서 저장*/
        var vid = $( this ).find( 'video' ).get( 0 );
    
        /* 동영상 재생 정지 */
        vid.pause();
    
        /* 마우스 호버시 실행된 내용을 원래 상태로 되돌려 주는 애니메이션*/
        $( this ).stop().animate( { 'width' : '12%' }, 700 );
        $( this ).find( 'video' ).stop().animate( { 'opacity' : '0' }, 2000 );
        $( this ).find( 'h3' ).stop().animate( { 'right' : '-310px' }, 200 );
        $( this ).find( 'p' ).stop().animate( { 'right' : '-310px' }, 500 );
		
    } );
	
} );



});
















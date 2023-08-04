$( function () {  			
 /*시계*/
    
    /*초 단위로 현재 시간값 재설정*/
    var timer = setInterval( time, 1000 );
    
    
    /*디지털 시계 만들기*/
    function time () {
        
        var now = new Date();
        var hr  = now.getHours();   /*시간*/
        var min = now.getMinutes(); /*분*/
        var sec = now.getSeconds(); /*초*/
        
        /*시간이 한 자리(0~9) 일 때 앞에 0 추가*/
        if ( hr >= 10 ) {
            hNum = hr;            
        } else {
            hNum = "0" + hr;
        }
        
        /*분이 한 자리(0~9) 일 때 앞에 0 추가*/
        if ( min >= 10 ) {
            mNum = min;
        } else {
            mNum = "0" + min;
        }
        
        /*초가 한 자리(0~9) 일 때 앞에 0 추가*/
        if ( sec >= 10 ) {
            sNum = sec;
        } else {
            sNum = "0" + sec;
        }
        
        
        /*시간 출력*/
        $( 'p span' ).eq( 0 ).text( hNum );
        $( 'p span' ).eq( 1 ).text( mNum );
        $( 'p span' ).eq( 2 ).text( sNum );
        
    }
    
    
    
    var now = new Date();
    var hr = now.getHours();
    
    /*테마 변경 함수*/
    if ( hr >= 5 && hr < 11 ) {
        $( '#wrap' ).removeClass();
        $( '#wrap' ).addClass( 'morning' );
    } else if ( hr >= 11 && hr < 16 ) {
        $( '#wrap' ).removeClass();
        $( '#wrap' ).addClass( 'afternoon' ); 
    } else if ( hr >= 16 && hr < 20 ) {
        $( '#wrap' ).removeClass();
        $( '#wrap' ).addClass( 'evening' );
    } else {
        $( '#wrap' ).removeClass();
        $( '#wrap' ).addClass( 'night' );
    }
   
	
} );

    
	


















